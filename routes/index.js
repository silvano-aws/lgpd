var express = require('express');
//const res = require('express/lib/response');
var router = express.Router();
const { SSL_OP_ALL } = require('constants');

/*
app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

*/
router.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rotinas LGPD Versão: 0.1' });
  //res.render('logon', { title: 'LGPD - Sistemas AWS' });

});

router.post('/checkuser', function(req, res, next) {

  res.render('index', { title: 'Rotinas LGPD Versão: 0.1 ' });
});

router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Rotinas LGPD Versão: 0.1' });
});

router.get('/lista_politica',function(req,res){
  res.render('politica_privacidade');
})

router.get('/lista_dpo',function(req,res){
  res.render('dpo');
})

router.get('/lista_consent_trab',function(req,res){
  res.render('termo_consentimento_trab');
})

router.get('/form_consent_com',function(req,res){
  res.render('form_consent_com');
})


router.get('/form_consent_trab',function(req,res){
  res.render('form_consent_trab');
})


router.post('/lista_consentimento_com',function(req,res){
  let nomeEmp
  let ecnpj='123'
 
  console.log(req.body.empresa);

  switch (req.body.empresa) {
    case '1':
       nomeEmp='Empresa Comércio de Corr. e Mang. e Mat. de Seg, Ltda'
       ecnpj='11.111.111/0001-11'
       break;
    case '2':
      nomeEmp='Empresa Produtos de Borracha Ltda.'
      ecnpj='22.222.2222/0001-22'
      break;
    case '3':
      nomeEmp='Empresa Distribuidora de Prod. Borracha Ltda.'
      ecnpj='33.333.3333/0001-33'
      break;
    case '6':
      nomeEmp='Empresa Distribuidora Lubrif. e Hidraulica Ltda.'
      ecnpj='44.444.4444/0001-44'
      break;
    }
  
  res.render('termo_consentimento_com',{empresa:nomeEmp,cnpj:ecnpj,nome:req.body.nome,cpf:req.body.cpf});
})

router.post('/lista_consentimento_trab',function(req,res){
  let nomeEmp
  let ecnpj='123'
 
  console.log(req.body.empresa);

  switch (req.body.empresa) {
    case '1':
       nomeEmp='Empresa Comércio de Corr. e Mang. e Mat. de Seg, Ltda'
       ecnpj='11.111.111/0001-11'
       break;
    case '2':
      nomeEmp='Empresa Produtos de Borracha Ltda.'
      ecnpj='22.222.2222/0001-22'
      break;
    case '3':
      nomeEmp='Empresa Distribuidora de Prod. Borracha Ltda.'
      ecnpj='33.333.3333/0001-33'
      break;
    case '6':
      nomeEmp='Empresa Distribuidora Lubrif. e Hidraulica Ltda.'
      ecnpj='44.444.4444/0001-44'
      break;
    }
  
  res.render('termo_consentimento_trab',{empresa:nomeEmp,cnpj:ecnpj,nome:req.body.nome,cpf:req.body.cpf});
})

module.exports = router;
