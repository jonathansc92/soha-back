const { check, validationResult } = require('express-validator');

const login = () => [
  check('email')
    .notEmpty()
    .withMessage('O campo email é obrigatório!')
    .bail()
    .isEmail()
    .withMessage('Endereço de email inválido!')
    .bail(),
  check('password')
    .notEmpty()
    .withMessage('O campo senha é obrigatório!')
    .bail()
    .isLength({ min: 4 })
    .withMessage('Por favor, preencha a senha com no mínimo 4 caracteres!')
    .bail()
    .isLength({ max: 15 })
    .withMessage('Por favor, preencha a senha com no máximo 15 caracteres!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

const reporter = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);

    return res.status(400).json({
      errors: errorMessages
    });
  }

  next();
}

module.exports = {
  login: [
    login(),
    reporter
  ],
};