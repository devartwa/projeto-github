import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Formulario, InputUsuario, BotaoUsuario, Lista, Usuario, Avatar, Nome, Bio, BotaoPerfil, BotaoTextoPerfil } from './styles';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        newUser: '',
        users: [],
    }

    async componentDidMount() {

        Icon.loadFont();

        const users = await AsyncStorage.getItem('users');

        if (users) {
          this.setState({ users: JSON.parse(users) });
        }
      }

      componentDidUpdate(_, prevState) {
        const { users } = this.state;

        if (prevState.users !== users) {
          AsyncStorage.setItem('users', JSON.stringify(users));
        }
      }

    adicionarUsuario = async () => {
        const { users, newUser } = this.state;

        this.setState({
            loading: true,
        });

        const response = await api.get(`/users/${newUser}`);

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };

        this.setState({
            users: [...users, data],
            newUser: '',
            loading: false,
        });

        Keyboard.dismiss();
    };

    navegacao = (user) => {
        const {navigation} = this.props;
        navigation.navigate('Usuários', { user });
    }

    render(){

        const { users, newUser, loading } = this.state;

        return(
            <Container>
                <Formulario>
                    <InputUsuario autoCorrect={false} autoCapitalize="none"
                    placeholder="Adicionar usuário"
                    value={newUser}
                    onChangeText={text => this.setState({ newUser: text })}
                    returnKeyType="send"
                    onSubmitEditing={this.adicionarUsuario}
                    />
                    <BotaoUsuario loading={loading} onPress={this.adicionarUsuario}>
                        { loading ? (
                        <ActivityIndicator color='#FFF' />
                        ) : (
                        <Icon name="add" size={20} color="#fff" />
                        ) }
                    </BotaoUsuario>
                </Formulario>

                <Lista
                    data={users}
                    keyExtractor={user => user.login}
                    renderItem={({ item }) => (
                        <Usuario>
                            <Avatar source={{ uri: item.avatar }} />
                            <Nome>{item.nome}</Nome>
                            <Bio>{item.bio}</Bio>

                            <BotaoPerfil onPress={() => this.navegacao(item)}>
                                <BotaoTextoPerfil>Ver perfil</BotaoTextoPerfil>
                            </BotaoPerfil>
                        </Usuario>
                    )}
                />
            </Container>
        );
    }
}

