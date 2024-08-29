## [0.7.0](https://github.com/LetsStreamIt/session-service/compare/v0.6.0...v0.7.0) (2024-08-28)

### Features

* deny empty messages from clients ([d00a920](https://github.com/LetsStreamIt/session-service/commit/d00a92081b063f9bd6f9a8180f3d7f0c38d9c167))

### Dependency updates

* **deps:** update dependency @types/node to v20.16.1 ([6bf38c6](https://github.com/LetsStreamIt/session-service/commit/6bf38c65aa1010b4b4950d077d25661efd8a3c63))
* **deps:** update dependency chai to v5 ([c1654a7](https://github.com/LetsStreamIt/session-service/commit/c1654a77ce8e2b1c8e42f493ab83787361dcbd58))
* **deps:** update dependency husky to v9.1.5 ([5d431cc](https://github.com/LetsStreamIt/session-service/commit/5d431ccbbeb94fec9634ec0595df0ce92660d56f))
* **deps:** update dependency lint-staged to v15.2.9 ([031d5b9](https://github.com/LetsStreamIt/session-service/commit/031d5b931034f37419e8397285631bea8986c365))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.101 ([1ed9da6](https://github.com/LetsStreamIt/session-service/commit/1ed9da6f85d1ab92091b11a49956bb6feb4abfe2))
* **deps:** update eslint monorepo to v9.9.1 ([3de9a72](https://github.com/LetsStreamIt/session-service/commit/3de9a72f6a25402a4a1e9e6e8d9430281740c347))
* **deps:** update node.js ([a9a49e6](https://github.com/LetsStreamIt/session-service/commit/a9a49e6177ffc64444f130f068c729648b442c3c))
* **deps:** update typescript-eslint monorepo to v8.2.0 ([6382e1d](https://github.com/LetsStreamIt/session-service/commit/6382e1d237450b3d519a43b73e28b2b6b80e5792))

### General maintenance

* chat message type for frontend usage ([a22d101](https://github.com/LetsStreamIt/session-service/commit/a22d1018e9d440489cfbc630d173e0beb87e89ba))

## [0.6.0](https://github.com/LetsStreamIt/session-service/compare/v0.5.0...v0.6.0) (2024-08-26)

### Features

* delete room when all users leave ([76a5dc9](https://github.com/LetsStreamIt/session-service/commit/76a5dc9e6e0a785094a1467b3b82b28d245617b1))

## [0.5.0](https://github.com/LetsStreamIt/session-service/compare/v0.4.0...v0.5.0) (2024-08-25)

### Features

* model chat ([695a884](https://github.com/LetsStreamIt/session-service/commit/695a88473de6e6bbe737e7acc1532299c687d830))
* send all chat messages at room join ([a3bae6c](https://github.com/LetsStreamIt/session-service/commit/a3bae6cc60224c361168dad9582e22e27edf42e9))

### Bug Fixes

* leave room ([6519b05](https://github.com/LetsStreamIt/session-service/commit/6519b05c3a95c7879da315ef33193135b745361d))
* object equals ([5900e7c](https://github.com/LetsStreamIt/session-service/commit/5900e7c7067d89552d1ab5bf272381de6b679e87))

### General maintenance

* add any type usage linter skip ([313b6f0](https://github.com/LetsStreamIt/session-service/commit/313b6f0255319582cbfdf4126b50081c3940632f))
* send chatUpdate message at client join, add room parameter ([2c36b18](https://github.com/LetsStreamIt/session-service/commit/2c36b183da671eeaa3cc47c11ef45f5cdcb3f9e0))

## [0.4.0](https://github.com/LetsStreamIt/session-service/compare/v0.3.0...v0.4.0) (2024-08-24)

### Features

* notification message deserialization ([0795fc8](https://github.com/LetsStreamIt/session-service/commit/0795fc85af3e62b57b7a1a018e4a1dc52f4e6361))

### Bug Fixes

* delete json parse because of nested serialization ([dce304b](https://github.com/LetsStreamIt/session-service/commit/dce304b0e64f2c35d4bc37f0a61bbc81f2d6e2c1))
* throw in return ([888d61f](https://github.com/LetsStreamIt/session-service/commit/888d61fe87689c66f1b8d52c54ebee3517ed5d50))

### General maintenance

* remove ack and message in leave room command ([609c5c6](https://github.com/LetsStreamIt/session-service/commit/609c5c63be12839b836d858d08edcacdf089b786))

### Refactoring

* rename join command file ([acd040b](https://github.com/LetsStreamIt/session-service/commit/acd040b69072ee345926743a6cf17bc351174a21))

## [0.3.0](https://github.com/LetsStreamIt/session-service/compare/v0.2.0...v0.3.0) (2024-08-24)

### Features

* textmessage serialization and deserialization ([55e8e5f](https://github.com/LetsStreamIt/session-service/commit/55e8e5f6efab71968cbe89736419cf95734ed27c))

### Documentation

* add class UML ([e57c3e5](https://github.com/LetsStreamIt/session-service/commit/e57c3e57fec39a9d470fe96241a507bc5e898f14))

### General maintenance

* add deserialization interface and abstract class ([6b2807e](https://github.com/LetsStreamIt/session-service/commit/6b2807eb3244c3695a300374115203494c031ac2))
* add serialization interface and class ([0ff7391](https://github.com/LetsStreamIt/session-service/commit/0ff7391c6d2d294720224cd39f701fc7821facb5))
* design chat and room as aggregate ([e8d86ec](https://github.com/LetsStreamIt/session-service/commit/e8d86ec78d6c58d036c85e73577fba158569b7b7))
* fix typo ([3fae278](https://github.com/LetsStreamIt/session-service/commit/3fae27899dfe1133b84bcce91f0923e4c7fd2b42))
* refine room class, add model getters ([2a53497](https://github.com/LetsStreamIt/session-service/commit/2a5349704363f32fb47118fc7ee7ade609627af8))
* remove token and socket from client model ([50d2ac2](https://github.com/LetsStreamIt/session-service/commit/50d2ac2fa2f6cc23218fcf0f002e373a54d97ac1))
* rename wsclient to user ([ed48de4](https://github.com/LetsStreamIt/session-service/commit/ed48de4131fb8cfd6d56f29ab5530586c221c315))
* use room aggregate to manage chat ([6dead7f](https://github.com/LetsStreamIt/session-service/commit/6dead7fe33e93bcb1f29251cb2009a984d10f114))

### Refactoring

* rename client methods to user ([5b1898d](https://github.com/LetsStreamIt/session-service/commit/5b1898da7e6c8ee7d1426a492f394d422f145762))

## [0.2.0](https://github.com/LetsStreamIt/session-service/compare/v0.1.0...v0.2.0) (2024-08-23)

### Features

* simple chat with message sending and joins/disconnect notifications ([075a5e9](https://github.com/LetsStreamIt/session-service/commit/075a5e93d58c2574c8a18b99ebef29b355106407))

### General maintenance

* del changelog ([1f42640](https://github.com/LetsStreamIt/session-service/commit/1f426409b8a49aa0d249f98a1093abc77d0f7daf))
* delete changelog ([4b3b720](https://github.com/LetsStreamIt/session-service/commit/4b3b720bf2de59da95dbe91a4f21bad7b7357d17))
* delete dto files ([02377ea](https://github.com/LetsStreamIt/session-service/commit/02377ea7479983317062c111ae5c21337b287f4a))
* design chat rooms as an EntrySet ([f6f8387](https://github.com/LetsStreamIt/session-service/commit/f6f8387abdd6b6ccae02637d9845e00f82cc1ecf))
* forget files ([aa6bc57](https://github.com/LetsStreamIt/session-service/commit/aa6bc57540e1fc3ebf06b52f50e7ae86a12e148c))
* redefine chat basic commands and acks ([2bed150](https://github.com/LetsStreamIt/session-service/commit/2bed1507f543cece9ee47d411e55cfdd96bd7109))
* **release:** 1.0.0 [skip ci] ([7b8def0](https://github.com/LetsStreamIt/session-service/commit/7b8def04767b762f6b4eeb8e105ab6615225bd27))
* **release:** 1.0.0 [skip ci] ([2f01a78](https://github.com/LetsStreamIt/session-service/commit/2f01a78ade9bf589ca4bd1481c7518a9f47852dd))
* remodel presentation reactions ([b6f56bb](https://github.com/LetsStreamIt/session-service/commit/b6f56bb501ce6c35f2a6247d103c3d83ea09ae3b))
* trigger release ([fd95d85](https://github.com/LetsStreamIt/session-service/commit/fd95d851517a2db956ad23254608d96cbd9be6ce))
* update modules in namespaces def ([6d25088](https://github.com/LetsStreamIt/session-service/commit/6d250883fec13a05330d46f49d561abc4ea241f0))
* use type inference for EntitySet class ([be2b2e0](https://github.com/LetsStreamIt/session-service/commit/be2b2e0cdb5a86559e58f7336832ab49b62e23f9))

### Refactoring

* create single function for each chat command ([ac0bdc5](https://github.com/LetsStreamIt/session-service/commit/ac0bdc54dbc6abdfaa10b89975b375e13a8cf813))
* delete chat controller, message class and useless function in utils ([e2e2d50](https://github.com/LetsStreamIt/session-service/commit/e2e2d50b4cd004c6ad5d6432b14c8621649005d1))
* mvc ([ac6ce5d](https://github.com/LetsStreamIt/session-service/commit/ac6ce5d9857dde69906dc42a4f7e9928eace19dd))
* remove Id class ([82eb51b](https://github.com/LetsStreamIt/session-service/commit/82eb51beef065386a9afb6cda05c2fbe95489464))
* separate chat commands in multiple files ([1d642bc](https://github.com/LetsStreamIt/session-service/commit/1d642bc076e081c752b6d9bf139c51a0d90a6005))