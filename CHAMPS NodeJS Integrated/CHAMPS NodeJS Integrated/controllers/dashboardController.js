//Creating instance of database model
const model = require('../models/events');

//Creating all the exports for refering related controller and rendering related web page
//If anyone added new web page then one needs to create mapping between controller and webpage here.

//For e.g. diagnosis route from dashboardRoute will redirect to "exports.diagnosis" method


exports.diagnosis = (req, res)=>{
    res.render('./Data/Diagnosis');
};


exports.treat = (req, res)=>{
    res.render('./Data/Treat');
};


exports.prevent = (req, res)=>{
    res.render('./Data/Prevent');
};

exports.respond = (req, res)=>{
    res.render('./Data/Respond');
};

exports.monitor = (req, res)=>{
 
    res.render('./Data/Monitor');
};

exports.dataupdates = (req, res)=>{
 
    res.render('./Data/DataUpdates');
};

exports.timefrinfectiontodiagnosis = (req, res)=>{
 
    res.render('./Data/TimefrInfectionToDiagnosis');
};

exports.hivtesting = (req, res)=>{
 
    res.render('./Data/HIVTesting');
};

exports.knowledgeofhivstatus = (req, res)=>{
 
    res.render('./Data/KnowledgeOfHIVStatus');
};

exports.timelinkagetocare = (req, res)=>{
 
    res.render('./Data/TimeLinkageToCare');
};

exports.percentofplwhincare = (req, res)=>{
 
    res.render('./Data/PercentOfPLWHInCare');
};

exports.personslostfromcare = (req, res)=>{
 
    res.render('./Data/PersonsLostFromCare');
};

exports.viralsuppression = (req, res)=>{
 
    res.render('./Data/ViralSuppression');
};

exports.incidence = (req, res)=>{
 
    res.render('./Data/Incidence');
};

exports.prevalence = (req, res)=>{
 
    res.render('./Data/Prevalence');
};





exports.glossary = (req, res)=>{
    
    res.render('./About/Glossary');
};

exports.definitions = (req, res)=>{
    
    res.render('./Data/Definitions');
};

exports.datamain = (req, res)=>{
    
    res.render('./Data/DataMain');
};

exports.new = (req, res)=>{
    res.render('./story/new');
};

exports.create = (req, res)=>{
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
    
};

exports.show = (req, res, next)=>{
    let id = req.params.id;
    let story = model.findById(id);
        if(story) {
            res.render('./story/show', {story});
        } else {
            let err = new Error('Cannot find a story with id ' + id);
            err.status = 404 ;
            next(err);
        }
};

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let story = model.findById(id);
    if(story) {
        res.render('./story/edit', {story});
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404 ;
        next(err);
        }  
};

exports.update = (req, res, next)=>{
    let story = req.body;
    console.log(story);
    let id = req.params.id;
    if(model.updateById(id,story)){
            res.redirect('/stories/'+id);
        }else{
            let err = new Error('Cannot find a story with id ' + id);
            err.status = 404 ;
            next(err);
        }
};

exports.delete = (req, res,next)=>{
    let id = req.params.id;
        if(model.deleteById(id)){
            res.redirect('/stories');
        }else{
            let err = new Error('Cannot find a story with id ' + id);
            err.status = 404 ;
            next(err);
        }
};