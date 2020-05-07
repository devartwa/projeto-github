import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: #f2f2f2;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  background: #eee;
`;

export const Nome = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;


export const Favoritos = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
margin-top: 1px;
`;

export const Favoritados = styled(RectButton)`
    background: #F5F5F5;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const AvatarRepo = styled.Image`
    width: 42px
    height: 42px;
    border-radius: 21px;
    background: #eee;
`;

export const Informacoes = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Titulo = styled.Text.attrs({
    numbersOfLine: 1,
})`
    font-size: 15px;
    font-weight: bold;
    color: #333;
`;

export const Autor = styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 2px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    color: '#333',
    size: 50,
  })`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `;
