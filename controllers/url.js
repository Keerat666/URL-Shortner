const validUrl = require('valid-url')
const shortid = require('shortid')
const Url = require('../models/url_model')
const baseUrl = 'http:localhost:8000'


module.exports = {

    // Create a new short url
    shorten_url: async (req, res) => {

        const {longUrl} = req.body

        //check base url
        if(!validUrl.isUri(baseUrl)){
            return res.status(401).json({"message" : 'Invalid base URL'})
        }
        // create url code
        const urlCode = shortid.generate()
        //check long url
        if(validUrl.isUri(longUrl)){
            try{
                let url = await Url.findOne({longUrl})
                if(url){
                    res.json({"message":"This url has already been shortened", "shortUrl": url.urlCode})
                }
                else{
                    const shortUrl = baseUrl + '/'+ urlCode
                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode
                    })
                    await url.save()
                    res.json({"result" : url , "message" : "Url shortened successfully"})
                }
            }
            catch(err){
                console.log(err)
                res.status(500).json('Server Error')
            }
        }
        else{
            res.status(401).json('Invalid longUrl')
        }
    },

    redirect_url : async(req,res) =>
    {
        try{
            const url = await Url.findOneAndUpdate({urlCode: req.params.code},{$inc: {hit_count: 1} })
            if(url){
                return res.redirect(url.longUrl)
            }
            else{
                return res.status(404).json({"err":'No URL Found'})
            }
    
        }
        catch(err){
            console.error(err)
            res.status(500).json('Server Error')
        }
    }

}
