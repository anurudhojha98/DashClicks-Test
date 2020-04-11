
const commonPaths = require('../paths/CommonPath');
const campaignPaths = require('../paths/CampaignPath');
const campaignController = require('../controllers/CampaignController');
module.exports = (app, router) => {

    router.post(campaignPaths.POST_CAMPAIGN, campaignController.createCampaign);

    router.get(campaignPaths.GET_CAMPAIGN, campaignController.getCampaigns);

    router.put(campaignPaths.PUT_CAMPAIGN, campaignController.updateCampaign);

    router.delete(campaignPaths.DELETE_CAMPAIGN, campaignController.deleteCampaign);

    app.use(commonPaths.API, router)
}