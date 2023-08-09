//Creating instance of 'express' framework
const express = require('express');
const controller = require('../controllers/dashboardController');
//Creating instance of 'router'
const router = express.Router();

module.exports = router;    

//GET REQUEST MAPPING
//If anyone wants to add new webpage they can create GET request entry here

//For e.g. to route application to diagnosis webpage, we are invoking "diagnosis" controller and 
//application will flow to that controller (controller code is in dashboardController.js file)

router.get('/diagnosis', controller.diagnosis);

router.get('/treat', controller.treat);

router.get('/prevent', controller.prevent);

router.get('/respond', controller.respond);

router.get('/monitor', controller.monitor);

router.get('/glossary', controller.glossary);

router.get('/definitions', controller.definitions);

router.get('/datamain', controller.datamain);

router.get('/dataupdates', controller.dataupdates);

router.get('/timefrinfectiontodiagnosis', controller.timefrinfectiontodiagnosis);

router.get('/hivtesting', controller.hivtesting);

router.get('/knowledgeofhivstatus', controller.knowledgeofhivstatus);

router.get('/timelinkagetocare', controller.timelinkagetocare);

router.get('/percentofplwhincare', controller.percentofplwhincare);

router.get('/personslostfromcare', controller.personslostfromcare);

router.get('/viralsuppression', controller.viralsuppression);

router.get('/incidence', controller.incidence);

router.get('/prevalence', controller.prevalence);





