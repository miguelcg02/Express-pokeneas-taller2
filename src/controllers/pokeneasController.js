const pokeneasResource = require("../resources/pokeneasResource.js");

function index(req, res) {
    const resourceInformation = pokeneasResource.getPokeneaRandomForJson(req, res);
    const jsonResponse = {
        containerId: resourceInformation.containerId,
        pokenea: {
            id: resourceInformation.id,
            name: resourceInformation.name,
            height: resourceInformation.height,
            hablity: resourceInformation.hablity
        }
    };
    res.json(jsonResponse);
}

function show(req, res) {
    const resourceInformation = pokeneasResource.getPokeneaRandomForView(req, res);
    
    const viewData = {
        containerId: resourceInformation.containerId,
        name: resourceInformation.name,
        image: resourceInformation.image,
        quote: resourceInformation.quote
    };

    res.render("pokenea/show", {viewData: viewData});
}

module.exports = {
    index,
    show
};
