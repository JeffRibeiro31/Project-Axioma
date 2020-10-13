const express = require('express');
const Question = require('../models/Questions')
const router  = express.Router();



router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/adicionar-questao', (req, res, next) => {
  res.render('adicionar-questao');
});

router.get('/configuracoes', (req, res, next) => {
  res.render('configuracoes');
});

router.get('/fale-conosco', (req, res, next) => {
  res.render('fale-conosco');
});

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get('/conexoes', (req, res, next) => {
  res.render('conexoes');
});

router.get('/nossos-clientes', (req, res, next) => {
  res.render('nossos-clientes');
});

router.get('/provas-criadas', (req, res, next) => {
  res.render('provas-criadas');
});

router.get('/provas-realizadas', (req, res, next) => {
  res.render('provas-realizadas');
});

router.get('/questoes-criadas', async (req, res, next) => {
  const QuestionList = await Question.find();

  res.render('questoes-criadas', {QuestionList});
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.get('/visao-prova', (req, res, next) => {
  res.render('visao-prova');
});



router.post('/questoes-criadas', async (req, res, next) => {
    try {
      //console.log(req.body);
      const {assunto, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, comentario  } = req.body;

      console.log (assunto, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, comentario)
      //const assunto = req.body.assunto;
      //const enunciado = req.body.enunciado;
      //const alternativaA= req.body.alternativaA;
      //const alternativaB= req.body.alternativaB;
      //const alternativaC= req.body.alternativaC;
      //const alternativaD= req.body.alternativaD;
      //const alternativaCorreta= req.body.alternativaCorreta;
      //const comentario= req.body.comentario;


        const newQuestion = new Question({assunto, enunciado, alternativaA, alternativaB, alternativaC,
          alternativaD, alternativaCorreta, comentario});

          await newQuestion.save();

          res.redirect('/questoes-criadas')

         // console.log(newQuestion);

    } catch (error) {
      
    }


})










module.exports = router;
