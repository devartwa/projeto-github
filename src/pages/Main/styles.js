import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: #f2f2f2;
`;

export const Formulario = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #f2f2f2;
`;

export const InputUsuario = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1;
    height: 40px;
    background: #f2f2f2;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #999;
`;

export const BotaoUsuario = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #333;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Lista = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Usuario = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 55px;
    background: #eee;
`;

export const Nome = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const BotaoTextoPerfil = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
`;

export const BotaoPerfil = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #333;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

