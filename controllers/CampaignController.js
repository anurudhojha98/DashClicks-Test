
const campaignService = require('../services/CampaignService');
const msg = require('../common/messages');
module.exports = {
    createCampaign(req, res) {
        try {
            let { params, fields } = req.body;
            campaignService.addCampaign(params, fields).then(addedCampaign => {
                return res.status(200).json({
                    success: true,
                    message: msg.ADD_CAMPAIGN_SUCCESS,
                    data: addedCampaign
                });
            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    getCampaigns(req, res) {
        try {
            campaignService.getCampaigns().then(campaigns => {
                return res.status(200).json({
                    success: true,
                    message: msg.GET_CAMPAIGN_SUCCESS,
                    data: campaigns
                });
            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    updateCampaign(req, res) {
        try {
            let { campaignid } = req.params;
            campaignService.updateCampaign(campaignid).then(updatedCampaign => {
                return res.status(200).json({
                    success: true,
                    message: msg.UPDATE_CAMPAIGN_SUCCESS,
                    data: updatedCampaign
                });
            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    deleteCampaign(req, res) {
        try {
            let { campaignid } = req.params;
            campaignService.deleteCampaign(campaignid).then(deletedCampaign => {
                return res.status(200).json({
                    success: true,
                    message: msg.DELETE_CAMPAIGN_SUCCESS,
                    data: deletedCampaign
                });
            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

}