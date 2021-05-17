const express = require('express');
const router = express.Router();

/* Imports AWS Image Functions */
const {upload } = require('../config/aws');

/* Controllers */
const {
	getAllProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject
} = require('../controllers/projects-controller');

//MODELS

router.get('/', getAllProjects);
router.get('/:id', getProject);
router.post('/', upload.single('file') ,createProject);
router.put('/:id', upload.single('file'), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
