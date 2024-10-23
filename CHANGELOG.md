## [0.12.1](https://github.com/LetsStreamIt/session-service/compare/v0.12.0...v0.12.1) (2024-10-23)

### Dependency updates

* **deps:** downgrade chai ([06ac816](https://github.com/LetsStreamIt/session-service/commit/06ac816bfec62fea20f2cba483ed7181061a02f9))

### Bug Fixes

* method exception ([d6ef3db](https://github.com/LetsStreamIt/session-service/commit/d6ef3dbb3f19219d5d9e12f7f9b83ba530bf267a))

### Tests

* add repository test ([829c959](https://github.com/LetsStreamIt/session-service/commit/829c959a678b7053193ec60329e267bd03561440))

### General maintenance

* private readonly field ([39ff9e8](https://github.com/LetsStreamIt/session-service/commit/39ff9e8a9cd2ee55492d6466fbf922185f4e9db8))
* refine domain entities and repository ([d77d6e4](https://github.com/LetsStreamIt/session-service/commit/d77d6e43e5cb8845d37487d47dfab12df51f5d7c))
* regen package.json, add event bus test ([68723c3](https://github.com/LetsStreamIt/session-service/commit/68723c3122807f20cb08251554f21a196c520ea3))
* rename email ([8abf3bd](https://github.com/LetsStreamIt/session-service/commit/8abf3bdc7c8f596e577d899bda1392ee6caa13c0))

## [0.12.0](https://github.com/LetsStreamIt/session-service/compare/v0.11.2...v0.12.0) (2024-10-22)

### Features

* validate token through auth-service and retreive user info from profile-service ([57ab4b7](https://github.com/LetsStreamIt/session-service/commit/57ab4b7e45fa1d68a28123e822589cc083446572))

### Dependency updates

* **deps:** update dependency @types/node to v20.16.13 ([e3dd8e5](https://github.com/LetsStreamIt/session-service/commit/e3dd8e5cac13a1ae799de7b6a41d6c1283b7dcc7))

### Bug Fixes

* put user inside user token response ([9f70e74](https://github.com/LetsStreamIt/session-service/commit/9f70e74d7850227ebeec12aabe9c90e131c47f50))

### General maintenance

* edit domain commands by replacing token with User ([e38177a](https://github.com/LetsStreamIt/session-service/commit/e38177a4e5b3e57eaac10a6b5c2f3fd6b8b9a35e))
* modify interface socket message handlers to use new version of commands ([512784b](https://github.com/LetsStreamIt/session-service/commit/512784ba8680c233d48ab6dfda1bc0b54a8d6cb8))
* remove presentation layer, leveraging to socket io default parser only ([c067ac6](https://github.com/LetsStreamIt/session-service/commit/c067ac6506c06f70dc34ea91702f68e3b6f5d282))

## [0.11.2](https://github.com/LetsStreamIt/session-service/compare/v0.11.1...v0.11.2) (2024-10-22)

### Dependency updates

* **deps:** update eslint monorepo to v9.13.0 ([5cdefc3](https://github.com/LetsStreamIt/session-service/commit/5cdefc389bdfe7153f0176540a543c87bfd2ccf0))

### Documentation

* remove typedoc file ([bced6d8](https://github.com/LetsStreamIt/session-service/commit/bced6d80cac83b55209a51f1edd4c4eda4aab9de))

### Build and continuous integration

* edit gen doc command, using entry point strategy ([626ef82](https://github.com/LetsStreamIt/session-service/commit/626ef82beaeccb213ea123f16998545449719ed9))

### General maintenance

* add typedoc.json ([4ad4875](https://github.com/LetsStreamIt/session-service/commit/4ad4875aa1ba761df4dfe4728491140ea32b9aa3))
* fix exports ([1ff102a](https://github.com/LetsStreamIt/session-service/commit/1ff102a75d469eb99df49b6cffc0666258899d02))

## [0.11.1](https://github.com/LetsStreamIt/session-service/compare/v0.11.0...v0.11.1) (2024-10-21)

### Documentation

* add application doc ([264f402](https://github.com/LetsStreamIt/session-service/commit/264f402b26d9b1d0bafc1289f9c8c5802892a116))
* add domain code doc ([3e823c7](https://github.com/LetsStreamIt/session-service/commit/3e823c7d9e8e43d63a232cb97235853a405a2880))
* add interface layer documentation ([aac06ee](https://github.com/LetsStreamIt/session-service/commit/aac06ee1ec3831d2bc1baebe53df3c00a9fc9709))
* add presentation documentation ([c8cf2c4](https://github.com/LetsStreamIt/session-service/commit/c8cf2c4fecc96a14cfecb149acc7cbfa871bcfca))
* refine function signature doc ([d2bbc15](https://github.com/LetsStreamIt/session-service/commit/d2bbc159c3ead5edef9ce539ec0a4ad200fbbe43))

### Build and continuous integration

* update build typedoc site command ([e8f56c5](https://github.com/LetsStreamIt/session-service/commit/e8f56c58a05d0e51111fe7f704ab5e87b756a0e7))

### General maintenance

* del version in package.json, update deps ([b799d42](https://github.com/LetsStreamIt/session-service/commit/b799d4296d6a94120f6cf36d3ed3017e4b2e12f9))

### Refactoring

* put session service command handlers in separate directories ([e14f995](https://github.com/LetsStreamIt/session-service/commit/e14f99583cd8725d8663ecc36697514988d93162))
* rename interfaces ([0c47570](https://github.com/LetsStreamIt/session-service/commit/0c475707128567e5ddc89680ea48eace3d2404e9))

## [0.11.0](https://github.com/LetsStreamIt/session-service/compare/v0.10.1...v0.11.0) (2024-10-21)

### Features

* verify token using auth service ([88fa54e](https://github.com/LetsStreamIt/session-service/commit/88fa54ee38e328187694f9b665e4d2a1ca82cb78))

### Dependency updates

* **deps:** update dependency @types/node to v20.16.12 ([d313d56](https://github.com/LetsStreamIt/session-service/commit/d313d56e4d1e72729bf51f56e0a0cd2647133453))
* **deps:** update dependency typedoc to v0.26.10 ([c5ab501](https://github.com/LetsStreamIt/session-service/commit/c5ab501d2dbc08948b73d28c7e3b7bdffd25486e))
* **deps:** update typescript-eslint monorepo to v8.10.0 ([5cf0151](https://github.com/LetsStreamIt/session-service/commit/5cf0151197e1a026d9860e638d3d81225858b057))

### General maintenance

* refactor packages in interface/presentation/application/domain ([2321826](https://github.com/LetsStreamIt/session-service/commit/232182623f90e4a8c0c1a16afb38d768effe030e))

### Refactoring

* rename notifications to reactions ([6d03bbe](https://github.com/LetsStreamIt/session-service/commit/6d03bbef12d8d69612e7c7a7c4a67644a91d7b30))

## [0.10.1](https://github.com/LetsStreamIt/session-service/compare/v0.10.0...v0.10.1) (2024-10-18)

### Bug Fixes

* session video synchronization ([70ddc6e](https://github.com/LetsStreamIt/session-service/commit/70ddc6e1db74b84ce8933e7f78134acf000286a4))

### General maintenance

* use notification type as notification emit msg ([49afc5d](https://github.com/LetsStreamIt/session-service/commit/49afc5d3e3be1544da610a9ca24101d340532352))

### Refactoring

* rename ack to response ([686a2b8](https://github.com/LetsStreamIt/session-service/commit/686a2b8f6a200261c8e6763dce8b41224da8169b))
* rename room to session ([10d1587](https://github.com/LetsStreamIt/session-service/commit/10d1587c54b0494f408a181da6b5c384e08b0199))

## [0.10.0](https://github.com/LetsStreamIt/session-service/compare/v0.9.3...v0.10.0) (2024-10-18)

### Features

* accept youtube video url as create session command parameter ([68839e9](https://github.com/LetsStreamIt/session-service/commit/68839e99cb013f7ced9a0703f5832c4a24b3c6b1))
* youtube video id verification ([bfc6fb8](https://github.com/LetsStreamIt/session-service/commit/bfc6fb87143378a79dd4268962db6c38bac6ab71))

### Dependency updates

* **deps:** update typescript-eslint monorepo to v8.9.0 ([dceb0f0](https://github.com/LetsStreamIt/session-service/commit/dceb0f0c5699188781070c6edc71039e2a7808b6))

### General maintenance

* add user token command handler ([26d9550](https://github.com/LetsStreamIt/session-service/commit/26d9550636caa5883e69f49ec6601bfcee6e62ec))

## [0.9.3](https://github.com/LetsStreamIt/session-service/compare/v0.9.2...v0.9.3) (2024-10-17)

### Bug Fixes

* session deletion when all user leave ([a77dd90](https://github.com/LetsStreamIt/session-service/commit/a77dd90105197a416588c065a33dd3c95164792b))

### General maintenance

* event bus executes handlers in sequence ([b195c00](https://github.com/LetsStreamIt/session-service/commit/b195c00bd592f48fa080cff7a3fd601d1efd509a))

### Refactoring

* move commands and events inside respective aggregates ([72986c0](https://github.com/LetsStreamIt/session-service/commit/72986c031de559b866f00dc5ec9eb87fab7c969c))
* remove useless functions in utils ([f7b744d](https://github.com/LetsStreamIt/session-service/commit/f7b744d9cdb01d4b2186422f10234eb47331c671))
* rename ack to response ([8b7a663](https://github.com/LetsStreamIt/session-service/commit/8b7a663a512d1db0bd04ee14190eb20d5f2bc863))
* rename room repository to session ([9084d79](https://github.com/LetsStreamIt/session-service/commit/9084d79637af165a11c7783a868560cc9c1d5cd4))
* rename room variables to session, move util functions ([b8171b0](https://github.com/LetsStreamIt/session-service/commit/b8171b0b1e60bcc5d3b926ab410dc09af88c5b51))

## [0.9.2](https://github.com/LetsStreamIt/session-service/compare/v0.9.1...v0.9.2) (2024-10-15)

### Bug Fixes

* imports in presentation ([1289f41](https://github.com/LetsStreamIt/session-service/commit/1289f411dc0e8dd6f7b13fa9f18d251b41a0410c))

## [0.9.1](https://github.com/LetsStreamIt/session-service/compare/v0.9.0...v0.9.1) (2024-10-15)

### Dependency updates

* **deps:** update dependency typedoc to v0.26.9 ([e969918](https://github.com/LetsStreamIt/session-service/commit/e969918146a7f8cc57295ae66981bf14d6e3ea40))

### Bug Fixes

* import errors, refactor packages ([1cb3ad2](https://github.com/LetsStreamIt/session-service/commit/1cb3ad206555014ef5467dfd5e244c0e78d20ce0))

### General maintenance

* implement event bus, refactor commands ([d9982d0](https://github.com/LetsStreamIt/session-service/commit/d9982d05236f54b151aa4236cd396ed42f56dade))

### Refactoring

* move command logic to session handlers, move presentation package ([0532c97](https://github.com/LetsStreamIt/session-service/commit/0532c9746bbdda5bce88626b010aa7d774743f4c))
* move model files inside aggregate package ([b3f3894](https://github.com/LetsStreamIt/session-service/commit/b3f389450bb810f57c3040b82bdacacabbd6b88e))
* presentation packages ([f65ec10](https://github.com/LetsStreamIt/session-service/commit/f65ec10c4e0aab9450ff55cfac6ed8d9fc9eb94c))

## [0.9.0](https://github.com/LetsStreamIt/session-service/compare/v0.8.0...v0.9.0) (2024-10-12)

### Features

* create room command ([e856c28](https://github.com/LetsStreamIt/session-service/commit/e856c28736ba83018f83017ce2d5ab28d646d8de))

### Dependency updates

* **deps:** update dependency @types/mocha to v10.0.9 ([a61ec0e](https://github.com/LetsStreamIt/session-service/commit/a61ec0e888dcc95ba720a225fb912487834b5691))
* **deps:** update dependency @types/node to v20.16.11 ([4343420](https://github.com/LetsStreamIt/session-service/commit/43434203dbdf102708d54bfefbb05d615ebc60a1))
* **deps:** update dependency express to v4.21.1 ([0f561cd](https://github.com/LetsStreamIt/session-service/commit/0f561cd85360fb835fd665c2004d442466483809))
* **deps:** update dependency typescript to v5.6.3 ([fdfa598](https://github.com/LetsStreamIt/session-service/commit/fdfa598ef86e6c9a48bec87dd157c2d37d2564ad))
* **deps:** update typescript-eslint monorepo to v8.8.1 ([a35443f](https://github.com/LetsStreamIt/session-service/commit/a35443fbf5b5c2908850ddcd8eb8236db267c476))

### General maintenance

* join user only if room is created, create room method ([854a29e](https://github.com/LetsStreamIt/session-service/commit/854a29e066774c94c4c967518d5a03f8a5ed764a))
* remove comments ([4738f60](https://github.com/LetsStreamIt/session-service/commit/4738f609321b2b7488cd57e4f7cb140bf85308cd))

## [0.8.0](https://github.com/LetsStreamIt/session-service/compare/v0.7.0...v0.8.0) (2024-10-09)

### Features

* single user synch at join, impl room play and stop ([9e808b1](https://github.com/LetsStreamIt/session-service/commit/9e808b17227a614a076fd9ecf679deac46397a3b))

### Dependency updates

* **deps:** update commitlint monorepo to v19.5.0 ([2237932](https://github.com/LetsStreamIt/session-service/commit/2237932c182c06ac6c9babbf031fd94ea83ba76f))
* **deps:** update dependency @commitlint/cli to v19.4.1 ([ffb9fd2](https://github.com/LetsStreamIt/session-service/commit/ffb9fd28899ce6c828c873bb50733905ea2d6282))
* **deps:** update dependency @commitlint/config-conventional to v19.4.1 ([de76707](https://github.com/LetsStreamIt/session-service/commit/de767070fe96993bf8c83e2d4b594c9300870226))
* **deps:** update dependency @types/chai to v4.3.18 ([f0db142](https://github.com/LetsStreamIt/session-service/commit/f0db1426622fe6699eb52403704a2ebc9367a345))
* **deps:** update dependency @types/chai to v4.3.19 ([13302bf](https://github.com/LetsStreamIt/session-service/commit/13302bfec5f824f1586d03d0927b22fc98bb8c93))
* **deps:** update dependency @types/chai to v4.3.20 ([cf796e6](https://github.com/LetsStreamIt/session-service/commit/cf796e63376afaeddc3e2a22fab08f2c9fb922c3))
* **deps:** update dependency @types/chai to v5 ([de36cc8](https://github.com/LetsStreamIt/session-service/commit/de36cc8bdc7eeac868b192c5c87d2fde822034b9))
* **deps:** update dependency @types/express to v5 ([14f372c](https://github.com/LetsStreamIt/session-service/commit/14f372c20f5f9aedbd3b21f5ea22bbad5201f980))
* **deps:** update dependency @types/mocha to v10.0.8 ([8f8daec](https://github.com/LetsStreamIt/session-service/commit/8f8daeca6594f3cfea642629dc25d5967c99f5ec))
* **deps:** update dependency @types/node to v20.16.10 ([a502c8a](https://github.com/LetsStreamIt/session-service/commit/a502c8a8fcf1fef684d288b50d59f53f78dd6293))
* **deps:** update dependency @types/node to v20.16.2 ([7f0c3bb](https://github.com/LetsStreamIt/session-service/commit/7f0c3bbacd439079b755af130bb4c9bd7a87cbb3))
* **deps:** update dependency @types/node to v20.16.3 ([dcd5aa2](https://github.com/LetsStreamIt/session-service/commit/dcd5aa2e24431944d233be6b5d5363af123968f3))
* **deps:** update dependency @types/node to v20.16.4 ([55c7128](https://github.com/LetsStreamIt/session-service/commit/55c7128a0839ee9f99be7013ef4ac42e51c0ba9b))
* **deps:** update dependency @types/node to v20.16.5 ([b38c796](https://github.com/LetsStreamIt/session-service/commit/b38c796c33d13b6d24bc516ba3949a6ceae1129f))
* **deps:** update dependency @types/node to v20.16.6 ([45f77a9](https://github.com/LetsStreamIt/session-service/commit/45f77a9da8b3d92588c85295000aeefb6f856b6a))
* **deps:** update dependency @types/node to v20.16.7 ([765538f](https://github.com/LetsStreamIt/session-service/commit/765538fd91c73efad8a8c830004c1c25077672e3))
* **deps:** update dependency @types/node to v20.16.9 ([2fa208f](https://github.com/LetsStreamIt/session-service/commit/2fa208f8a0b999a164caa460c74fabcc36b688bf))
* **deps:** update dependency @vue/eslint-config-prettier to v10 ([9cd8c08](https://github.com/LetsStreamIt/session-service/commit/9cd8c08fa9cff543cebe5b75cc29368b4b67c11a))
* **deps:** update dependency express to v4.20.0 [security] ([0ff98d6](https://github.com/LetsStreamIt/session-service/commit/0ff98d65e7915f2d7daee5cce25e374398938748))
* **deps:** update dependency express to v4.21.0 ([a50d2f9](https://github.com/LetsStreamIt/session-service/commit/a50d2f9579b74938dfb2669bb5f348c04ba0ebc0))
* **deps:** update dependency husky to v9.1.6 ([fef3fb0](https://github.com/LetsStreamIt/session-service/commit/fef3fb0c42af4607b511d04d9ac4592424a36e40))
* **deps:** update dependency lint-staged to v15.2.10 ([b8f4898](https://github.com/LetsStreamIt/session-service/commit/b8f48986e6e77e686aba6db31960bb9d08946fb1))
* **deps:** update dependency nodemon to v3.1.5 ([8a7360f](https://github.com/LetsStreamIt/session-service/commit/8a7360f5ea686b5e23b0b915e0e63a993794db2d))
* **deps:** update dependency nodemon to v3.1.6 ([4ba0208](https://github.com/LetsStreamIt/session-service/commit/4ba0208af30ab8e261df85fb4b5ccf6915413f06))
* **deps:** update dependency nodemon to v3.1.7 ([d9e421b](https://github.com/LetsStreamIt/session-service/commit/d9e421b56d022a4744a9c897db5711cf870640fd))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.102 ([63f4220](https://github.com/LetsStreamIt/session-service/commit/63f422073cb01ed775467899269ad3863db2dadf))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.103 ([cfe890a](https://github.com/LetsStreamIt/session-service/commit/cfe890a61aae5126aecb7c02677b926b8cd6926f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.104 ([483ca0e](https://github.com/LetsStreamIt/session-service/commit/483ca0eb4ecbd40437235e6d5dd54c5b41c9f0eb))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.105 ([409a9d6](https://github.com/LetsStreamIt/session-service/commit/409a9d611e07020655ac11deee633742c6959898))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.106 ([64e1b00](https://github.com/LetsStreamIt/session-service/commit/64e1b008dafd137a41d1480713977ae747fcdde2))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.107 ([c55db17](https://github.com/LetsStreamIt/session-service/commit/c55db17a253a9c59649cb9b889091ab364b687de))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.108 ([6d8d0da](https://github.com/LetsStreamIt/session-service/commit/6d8d0dad7a241e2c281f3707389d588eaed4a170))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.109 ([d80d29c](https://github.com/LetsStreamIt/session-service/commit/d80d29c951ea8f15632555591facdfc0fd38e425))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.110 ([bdb04bc](https://github.com/LetsStreamIt/session-service/commit/bdb04bcd975c417c4d1ff6e8fbe15beccb7b762d))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.111 ([971c264](https://github.com/LetsStreamIt/session-service/commit/971c264e8e02fa99f2a0c125045693cf0f838abf))
* **deps:** update dependency typedoc to v0.26.7 ([18e9038](https://github.com/LetsStreamIt/session-service/commit/18e90386ff39fef4b2af18afb5fc50785e81bdf0))
* **deps:** update dependency typedoc to v0.26.8 ([8de13e0](https://github.com/LetsStreamIt/session-service/commit/8de13e01fb3c4211e102c45513631790d533971d))
* **deps:** update dependency typescript to v5.6.2 ([4843922](https://github.com/LetsStreamIt/session-service/commit/4843922d82d6fa126cb299e11f28401bd70b93d1))
* **deps:** update eslint monorepo to v9.10.0 ([1706f1b](https://github.com/LetsStreamIt/session-service/commit/1706f1b017bbff7c03dd9cef8cd261d8ee72a275))
* **deps:** update eslint monorepo to v9.11.0 ([cfb83e2](https://github.com/LetsStreamIt/session-service/commit/cfb83e2589d37b2e344b4f8fa4e281a793656fb8))
* **deps:** update eslint monorepo to v9.11.1 ([46bdaf1](https://github.com/LetsStreamIt/session-service/commit/46bdaf1de704387005d927580e66cdeb471c7056))
* **deps:** update eslint monorepo to v9.12.0 ([2465d28](https://github.com/LetsStreamIt/session-service/commit/2465d2870803411a733f9588d288076ed4d7610d))
* **deps:** update node.js to 20.18 ([b44fe35](https://github.com/LetsStreamIt/session-service/commit/b44fe3568ad049a473f880f351db3f29b8c3a946))
* **deps:** update node.js to v20.18.0 ([a688e6e](https://github.com/LetsStreamIt/session-service/commit/a688e6e8eed38bf00b334f494575716108412977))
* **deps:** update typescript-eslint monorepo to v8.3.0 ([9675fc8](https://github.com/LetsStreamIt/session-service/commit/9675fc8896ab621c01dff460a7abb637a1ffa7d3))
* **deps:** update typescript-eslint monorepo to v8.4.0 ([7ba493a](https://github.com/LetsStreamIt/session-service/commit/7ba493a858f98d0a52e8f1a1facee846348fe578))
* **deps:** update typescript-eslint monorepo to v8.5.0 ([bca7f92](https://github.com/LetsStreamIt/session-service/commit/bca7f92bd6da5c882a2a2bcd684c39506d621d08))
* **deps:** update typescript-eslint monorepo to v8.6.0 ([ee423a2](https://github.com/LetsStreamIt/session-service/commit/ee423a2e4383652ec1622bd013bfc47898561395))
* **deps:** update typescript-eslint monorepo to v8.7.0 ([b244ec0](https://github.com/LetsStreamIt/session-service/commit/b244ec05f734d32c25db397f08940195f6247f03))
* **deps:** update typescript-eslint monorepo to v8.8.0 ([d62492b](https://github.com/LetsStreamIt/session-service/commit/d62492bb42e0a201451a94a9275f00209e483f6b))

### Build and continuous integration

* **deps:** update actions/setup-node action to v4.0.4 ([e6a3686](https://github.com/LetsStreamIt/session-service/commit/e6a368682a596fbb517e54b90a1854d46f96f49e))
* **deps:** update danysk/action-checkout action to v0.2.20 ([c80d956](https://github.com/LetsStreamIt/session-service/commit/c80d9567e26705c3cc8e326f982542c790856aca))
* **deps:** update danysk/action-checkout action to v0.2.21 ([e77a4ca](https://github.com/LetsStreamIt/session-service/commit/e77a4ca575ccd397c6822a34d32933341e163072))
* **deps:** update docker/build-push-action digest to 4f58ea7 ([31eeb32](https://github.com/LetsStreamIt/session-service/commit/31eeb32eb9285b79013e8ae892cbe4c9fe4983a3))
* **deps:** update docker/build-push-action digest to e44afff ([d308001](https://github.com/LetsStreamIt/session-service/commit/d3080017ca462dc644cdcd15edfbe066a970f732))
* **deps:** update docker/login-action digest to 1f36f5b ([162f1db](https://github.com/LetsStreamIt/session-service/commit/162f1db67651a8c8864d69efe337bd374d5384d7))
* **deps:** update docker/login-action digest to 29df2a9 ([ce29400](https://github.com/LetsStreamIt/session-service/commit/ce29400c415f52cf7c23b3eb5d79f578efd2ff67))
* **deps:** update docker/login-action digest to 3b8fed7 ([182b66e](https://github.com/LetsStreamIt/session-service/commit/182b66eb7deed76c686bdcaaef887f9c9079b581))
* **deps:** update docker/metadata-action digest to 70b2cdc ([d8d9263](https://github.com/LetsStreamIt/session-service/commit/d8d9263d8c76f63569021d8bc5cc6a88a1eac0a7))

### General maintenance

* add video commands in presentation ([a3f518a](https://github.com/LetsStreamIt/session-service/commit/a3f518a0caa1db595822e41824afe7e8a24ce90d))
* add video state deserializer ([adb7332](https://github.com/LetsStreamIt/session-service/commit/adb733213e5858b2bf76c0fdfe0c7cc04d00e19e))

### Refactoring

* delete socket io namespaces ([3ca06b9](https://github.com/LetsStreamIt/session-service/commit/3ca06b919355a22b894c6161a54377a159b0b6f2))
* rename and move listener functions ([c2f89ec](https://github.com/LetsStreamIt/session-service/commit/c2f89ec43c44d414472b0770d790d48cd69da502))
* separate chat and video view and controllers ([967ab7a](https://github.com/LetsStreamIt/session-service/commit/967ab7a7028b1a42ef9f11883590552c5e8d504a))

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
