import React, { Component } from 'react';
import api from './../../services/api';


import { Container, Header, Avatar, Nome, Bio, Favoritos, Favoritados, AvatarRepo, Informacoes, Titulo, Autor, Loading} from './styles';

export default class User extends Component {

    title = async () => {
        await this.props.navigation.setOptions({title: this.props.route.params.user.name });
    }

    state = {
        stars: [],
        page: 1,
        loading: true,
        refreshing: false,
    }

    async componentDidMount(){

        this.load();
        this.title();
        const user = this.props.route.params.user;
        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({stars: response.data })
    }

    load = async (page = 1) => {
        const { stars } = this.state;
        const user = this.props.route.params.user;

        const response = await api.get(`/users/${user.login}/starred`, {
          params: { page },
        });

        this.setState({
          stars: page >= 2 ? [...stars, ...response.data] : response.data,
          page,
          loading: false,
          refreshing: false,
        });
      };

      loadMore = () => {
        const { page } = this.state;

        const nextPage = page + 1;

        this.load(nextPage);
      };

      refreshList = () => {
        this.setState({ refreshing: true, stars: [] });
        this.load();

      };

      handleNavigate = repository => {
        const { navigation } = this.props;

        navigation.navigate('Repositório', { repository });
      };

    render(){

        const { stars, loading, refreshing } = this.state;
        const user = this.props.route.params.user;

        return(
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Nome>{user.name}</Nome>
                    <Bio>{user.bio}</Bio>
                </Header>
                {loading ? (<Loading /> ) : (
                    <Favoritos
                    data={stars}
                    onRefresh={this.refreshList}
                    refreshing={refreshing}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.loadMore}
                    keyExtractor={star => String(star.id)}
                    renderItem={({ item }) => (
                        <Favoritados onPress={() => this.handleNavigate(item)}>
                            <AvatarRepo source={{ uri: item.owner.avatar_url }} />
                            <Informacoes>
                                <Titulo>{item.name}</Titulo>
                                <Autor>{item.owner.login}</Autor>
                            </Informacoes>
                        </Favoritados>
                ) }
                />
            )}
            </Container>
        );
    }
}
