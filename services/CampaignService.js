
const { account, AdAccount, Campaign } = require('../app');
module.exports = {
    async addCampaign(params, fields) {
        return await account
            .createCampaign(
                fields,
                params
            );

    },
    async getCampaigns() {
        return await account.read([AdAccount.Fields.name, AdAccount.Fields.age])
    },
    async updateCampaign(campaignId) {
        return await new Campaign(campaignId, {
            [Campaign.Fields.id]: campaignId,
            [Campaign.Fields.name]: 'Campaign - Updated'
        })
            .update();

    },
    async deleteCampaign(campaignId) {
        return await new Campaign(campaignId).delete();
    }
}