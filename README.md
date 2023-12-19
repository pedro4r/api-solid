# App

GymPass style app

## RFs (Requisitos funcionais)
- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuario logado
- [ ] Deve ser possível o usuário obter o histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [ ] Deve ser possível o usuário realizar check-in em uma academia
- [ ] Deve ser possível validar o check-in de um usuário
- [ ] Deve ser possível cadastrar uma academia

## RNs
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] O usuário não pode fazer dois check-ins no mesmo dia
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por adminstradores
- [ ] A academia só pode ser cadastrada por adminstradores

## RNFs
- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL
- [ ] Todas as listas de dados precisam estar paginada com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON WEB Token)