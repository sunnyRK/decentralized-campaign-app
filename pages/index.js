import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../factory';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns()
    {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true
            };
        });
        return <Card.Group items={items}/>;
    }

    render(){
        return <div>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
                    <h3>Open Campaings</h3>
                    {this.renderCampaigns()}
                    <Button content="Create Campaign" icon="add circle" primary />
                </div>;
    }
}
export default CampaignIndex;