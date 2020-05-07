import React, {Component} from 'react';

import { Browser } from './styles';

export default class Repository extends Component {

    render(){

        const repository = this.props.route.params.repository;

        return(
            <Browser source={{ uri: repository.html_url }} />
        );
    }
}
