'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5b33e15fa89a40f1e9acd79e914049fb",
".git/config": "d3355f7d3427a9fb3055a7b39a633968",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2607e9843c80b17ac0cd7624f1cc1d84",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e57e2c02adad5b17e10a6203c168028a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7655754f44c4727c67cdd7f296c4e63b",
".git/logs/refs/heads/main": "6d91a80a0cc2118e86872eb7bb07a272",
".git/logs/refs/remotes/origin/main": "383b83ab73b47848d577bf88d1198e70",
".git/objects/02/853b4791dd40e711ce5707bc9103d3cde2fece": "2ccdcaad28d582a724aaad00437f21cd",
".git/objects/03/46b7d2437e49232cefea3ae39f7357fafbabca": "ddc3ffa7c7a273023a6fb4e03ae89b41",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/d18c0e849bdd89a719555012f9acec1810e792": "ec597f24a648460c09a8dc9795dc1afe",
".git/objects/04/022f39d669c083ef849e3ffa1c4a29879430ae": "6c63e224e40d5c4ee517d5a7e7f2276e",
".git/objects/06/862fb76d5444dffed41fa51f6d814b8d20c9a4": "aa8cad0092eed4238f304778d8cd3872",
".git/objects/07/d9421110c28aedacfe750bab5794ebb53c44b0": "d4bc474ce54742df20e0efe74b0570ad",
".git/objects/08/5adc1b6585d3fa1968dacc26c6a640001a536e": "6ee05df2c58b0f0031cd837957144997",
".git/objects/0a/5eb0ba2332982e76fac0bed0f4767bb3689802": "1af1bb085bedb4f380f5761b0bbf9722",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/7522e4b5cde4994982b95eb19b1480e1046944": "ee7b995f70c3b52d4edd58e89dea6877",
".git/objects/0d/786b7000b58d3e05e8b74bfc6c2c5e1beda86f": "4a74fd5060eb227f5ebc17e56ffd276e",
".git/objects/10/db8518f20ce0c6d5cbf4a43eb8fd829319ad5f": "127fda5411ca0cbf1d7d2843edfeea9c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1a/c7d9194ad9382c63a550dd01af2e49887affb2": "3438889a71229e11eb05e1fb21eaa862",
".git/objects/1b/159f18c40bf66bb848eab3e6d2e59a37f545e7": "870e2f465fbc1e2c1bc843ad0b89e2d7",
".git/objects/1c/76b66716698d4792e43939b3c82c39a29dcdbd": "09db030f9eda9184baf6ab254f2a9c86",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/fb83c4ece580884dfe2e4120b9c300ab0a9574": "d57cffe09667d80c0d52793ff680d3f1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/21/42984a86eb67f87b60540933c1ea06bd9aebca": "a1cbb22ded579a56379f5bd3d593b219",
".git/objects/23/95202307fd1d549670417049b6f6462e7f9609": "c69a3c0ffd44ea82c953a4e3a3c70ec3",
".git/objects/27/39e8e86859d27d7c56130f76c649d30290cf44": "e8c0cbfd6b0552f6677702a482d6cf74",
".git/objects/27/c5e9a94a6dc39a4ffd6fefe225bcd199730d7e": "1aeee6722be154cc63ce617ff824653c",
".git/objects/29/1e629445896e2e2fcb08c7906e14f1a9616204": "a3c48184bf58a14192187cba19524001",
".git/objects/2b/fceed52175e177a19cdb9262176ce0f7189df8": "90253339722707491c59c4dbc44c64ad",
".git/objects/2c/ab64383202798849d8660a5bd2240ae877ab86": "f6540d64cfefb773b197fbbd184fe3ca",
".git/objects/2f/5dbd7eaee24da7f4c07cbc82e9370ba285543a": "de66179d0cffc0ec54517c831bc89d29",
".git/objects/30/8f50a8ba16335e912dd17a7c08ffa605afd900": "ada383cf7c2b28ec676936fd09b6fdf5",
".git/objects/31/a708b6dbee63424251c8832eff03f95be51a3d": "a14f0139c59837e8f27c767db786491d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/be2739dff677ad82584b978bc51386d2e93c4e": "53418f0bece7aabd3f0740c7bf2ea48b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/11ede18253b8e4721367df55c5a4eb24fc3c87": "91f0ffe64953c59763db78635accb4a4",
".git/objects/39/bb60f6698021fb13a49fc36fb62b02ff5d0c14": "4887a682c87056e9b166ef8fecc250e2",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/355bbe167abaf4f08f414514a5ac7e5ee1561f": "03436899b984a2be9dbf4e8f79d1bb5d",
".git/objects/3e/aefd0bf1269aa4a152adccfe08205b52f54d95": "58d1c8efdaf65e7938bd3ac349853d41",
".git/objects/3f/88ba5eda11ead7a0a7e2cc9937d1a873ea7e22": "03753437aace6768f5485416a2eefe59",
".git/objects/41/d205a1e6c9ef2808f7cb64c290404e99c9ff04": "50040e043fd26d1d7099419cffa07f3f",
".git/objects/4a/8aa22d0def950a15ccea4c6014f67970495383": "d1824ca05b63e8d15151d66a3889c916",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/ab389bf1793c560f2d37b327db96ddf5ce2e4d": "75cb8d14d72d40a04456b55a80c5e9ee",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/9d9f94ebe837bb5dde5d70356c705a0786e045": "c1fd4f31ee7610eacc9c4d2273960bbf",
".git/objects/5e/3ad28fbefa38cb9030f89baea773832d72b1da": "75d571a2732175c4b0478ba7ca64466b",
".git/objects/5e/62749feb762470d5771c8dfe7ea6d2f2899073": "bfb827ac0241b4721ae68dcd883768a4",
".git/objects/60/78724abb14e0eba59379408093e66fb21be14e": "35ff50f3d7c24debb83414de15b3616d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/9d3a7af8b0e497cdff97ce8f3db5b390bf0d82": "220265573079a316e3da01b6820abc3b",
".git/objects/67/328972282777094739682f06b103bc90d5b627": "39f2889f720f648843080c6d0259fd71",
".git/objects/67/bccc80b13fa5d1b8d4fddd9dff022e6c7a5c78": "c26d2f5ca4d824924fe1935f31891347",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6d/ce2e39c6c47d2a62e42a1d1f90e85eb02c3fba": "302ea24b5285f48a5f2a21c135750dcd",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/f8c28c0745810e2d51c4d36a4d380e066233fe": "c1e4be35aa8c9b01cf65556b5587508e",
".git/objects/75/1b35ca5e33cd4a2f734538d312153d72eafeb9": "6a2af28cdcd79ecb8c941c200ab3f009",
".git/objects/78/fcc9abfa622f3ef89536e921288632a1bda658": "168c1a23c229fdcbfe1e8053a2ad3a69",
".git/objects/79/f1fd02d9fdf4b892e7c2fed753e1a3cda7641f": "56d15d45b7009368cc933518afe3a9e2",
".git/objects/7a/5f64401c4d7c5d0fe46cf9eaa0ed0bafc94827": "dea64823c5ca4a3e8f38fc6feab48d5e",
".git/objects/7d/13bb50a9c7915bb652e69e7e13e60ca84f88eb": "489ac53e50684dec89e7db554df02212",
".git/objects/80/bb5b0006d1be78de2fe4ae5102ea98ec4c55c6": "7ff40e78e774598d35ff7a9e6c0ea0a7",
".git/objects/82/d559319e3a4d6fbc737ccd9271476ff6f94a2b": "1d1b11b759d5e51059dac7d2e4f5144e",
".git/objects/83/5d22a6ba054414a1f016872e1833797a9c2f01": "3890c18b3a0f772ed68e7212008fcc8a",
".git/objects/84/21552499a7efa1a504ac6c8fb04710b0ae01b2": "27a30e3e7ae62017bb6be83d826804ac",
".git/objects/84/34dd5d72d14e5d6c1217da51e81b1325c83f26": "11518a63e91905f69207d0a96d8869e2",
".git/objects/84/5619f3b21dd4c3a74cd049427cc99895d20ed7": "23e0010cee8fd1346912ba7699757158",
".git/objects/86/85bdb902023855b54c3c818fc1bd48cb937a16": "3c5aeb6b2235c1a9c0debe57df909949",
".git/objects/86/999cc5ce19f85c46a8ce49c5b8d9c065ca8897": "d24f15702c9ead7b6ba84ef338c21d98",
".git/objects/88/0b6aeb66326c6abdf5f351afe248f31798c162": "b6cdbc39b355a35b9ecc6227ff8d1b59",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b46e7b8d40b8eedb4363aede515c64929c8f2d": "e7baf8e814370c0964d9b9b16355704b",
".git/objects/89/eaa016730fd9c6c7d1d5161492d71d608748d4": "e649a15f5d2fbe953f41bdc1e420d6c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0bfe9956cb32e656a63a0b5afdc720568f0f6f": "8ace280af7ce926b687caff75ef40018",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/2f3fd8e072747a996e49b54779480e7223beff": "94c18352b74b4d572aa70bf8c653a359",
".git/objects/91/7dce978bb59ba2d4b17085cc8f908206bebfdb": "92821e594ba24313a84ba95ba7573ddb",
".git/objects/91/977c6528d439ddeed3d9867731681157f2a086": "626d777f2058fb2126c2e10f696e819f",
".git/objects/93/7b1e9b4971410e09c5b8e0a5d7be760a11212d": "8d08e988fd9b8de3d8ce8a3d694a8ce3",
".git/objects/98/34eed4c000eb01aa31b50d3bca19ac74253409": "8765804f5da3216d55fbcdb44f1a6549",
".git/objects/9d/0f66bc13c035496e453fe19bf73e91682624c9": "e26bd8018ca6a5a243500aacd900abd9",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/42537ecba12a7b1c517597345c0a368681790f": "7d6d70a4e143af4637323edc43fd0250",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/40b53ed62e29a4742f0f6b389d9a1f9ef5e823": "a9e85214ee5513b7b4885b92ba2f26f3",
".git/objects/b4/4cf592437dc22695e6b13f1720a60d8cbdec14": "88271b012ed661621787bf05bf2733de",
".git/objects/b4/b7a3a58f8dc9d02504c4d3f687d83d09709220": "644f887e9b48e96521588683fc98b59c",
".git/objects/b5/3eb429e8c406da666951b561917f66128ae2ff": "4e405d908cad97b3ccac6562b2e63d1b",
".git/objects/b6/5ea33930e761a16b6d9292ccdcfeba3d46fdb3": "f4066534aef5e35cb50be2fb42e9cf49",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f5b061fff300636ad483ba976fb07cce91904a": "70ea3f1c91e9ef23b75d4b582a928b5f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ee584b5ee3bf5ecd4d3136e3572b4064264814": "ee945fd18d04428ac716e29e11b569e0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/8ea7447c867e8ff41981f1ab34eb7a1b4d170b": "199fccc6676f4a874cbb3751c2525912",
".git/objects/be/10b5e20ed0616e43d22a9054d496cc95bbf4bf": "bee784a63b21f06537b3c2aa72ccd623",
".git/objects/c2/e3167216bf6b687eb332529e928a018b64407f": "e5795789a3cb1b95343300bf55e33f16",
".git/objects/c3/ab7afd7e0310c038d730083a779e67026f0452": "72fbad01fb6bfc0369dc990580a2796d",
".git/objects/c8/d4d00668658dc31557c0ce8dab6d86c6852fcf": "27c6d0162a2a90fb48384f83174ad8af",
".git/objects/c9/658f746fef56f723dd5f68281a858198fb1d2b": "99720e9669caa05de46ad5ff18c825f3",
".git/objects/ca/424cdb513de21aac949ca83fed95e068e0de91": "554421bd55ebb3d27670957a25ff76ab",
".git/objects/cb/c9205f1cb9d3a5bcf0b370a2d72e24436ef3e6": "3d0b9c09128edd3c9d127e2831879167",
".git/objects/cc/2178d8ac930ccb90448756cc67da7e44c711c9": "2735c0377ccecd581fa53f205c816133",
".git/objects/cf/262ba1df791a3064fab8bcfae87d7ab26a7d7c": "de2494494f74f3ec1b34c1e3d056df1c",
".git/objects/d2/602869a49da042d7a9443c258f3ab590cbd564": "99cca1343b3b1fc290b78a31bc895529",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/d853103157637ec297271a66c4c77a26cb521b": "7f6aba09a972feeb51af68150154fd6b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/237ab9bc937820a48ddd85fe0aec3708301856": "ae7afc14eddfbcdff5a993ec4220054d",
".git/objects/dd/974b5b4b13f22a71385fdedc963ba34b69aa09": "2ec3063db9259886d3fd831863d78404",
".git/objects/e1/6c2876b2fdbae43a7cd7aaa16aa6cd2c884495": "776a84597563107906a91ef249e1eb98",
".git/objects/e4/8144efaf4f3e8d2b3899c0127f26640bcc8e9b": "e5b1aa35a0a0ca7bd7935fe5a29f0e34",
".git/objects/e7/3d76e0371529102b66ff0c7e64af59b004e3f9": "9c1c9b849cbbcea39aaa93e82817a23c",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/ca48533a2ca435f749463730372f89a7652b56": "6467af23c409b0fdc367ffb5a207756a",
".git/objects/ea/7ce5a54043fd83283f38177284276ec2dd8c21": "1bfe1df7e1f606f4ed2bcaca58573a1e",
".git/objects/eb/14d20459cd02add166816158677570d4b1f190": "c0978a208f98cf921cc662e5548ea809",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f3/cafe7e3ff0a1c24ab8c7258ed0d05ffa926d26": "64bb594a5d4780f16a746d0d48097dcb",
".git/objects/f5/49a36f52bd3da19cff5fd7252f3a6d697dacae": "8469a6197a0d9533cf638225a8a1bf14",
".git/objects/f5/8c83f46454197d12151c75c6e8e76c0f6667b7": "20f3525fe3031e6d216129d14536088b",
".git/objects/f7/0a476e3655f322c561253a8e838e2d718257ba": "1bd9a881f6a71c2251c805c56a2e338a",
".git/objects/fa/e3858463386ce53200a79e50b3577817f1aa00": "e39fa02e1d972362f764c61e3b7288c1",
".git/objects/fa/e5443065c91815e7a4ea19007923f80f64c64a": "4718f795ab86df6641fa8503cb29fffa",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "7ff46780cef23440499005c642f3e62d",
".git/refs/heads/main": "d31b80bee182ee9976c738f9a82e889a",
".git/refs/remotes/origin/main": "d31b80bee182ee9976c738f9a82e889a",
"assets/AssetManifest.bin": "7e1bc516ea4560660de7e978353f8476",
"assets/AssetManifest.json": "5f660eae5ed9623c4b019a794c7b7bfa",
"assets/assets/fonts/PlayfairDisplay-Black.ttf": "620b24746be718559d5b61c99a11111c",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "f9929052b526bf606d3128c4c3ad8b44",
"assets/assets/fonts/PlayfairDisplay-Medium.ttf": "39a3659a5e980111ddf8858e2ae8af89",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/assets/fonts/PlayfairDisplay-SemiBold.ttf": "a56474741daed0dd40b7b580627f2f98",
"assets/assets/fonts/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/images/2.0x/myLogo.png": "1a4bdf6537fe4510ec923ce3b9028ee4",
"assets/assets/images/accessControl%2520homapage.png": "15a8f1eff2a683ab70cd2f59a6c99944",
"assets/assets/images/accidentAlert.png": "b0d7d1c45613b707e8317f381ca5d666",
"assets/assets/images/background.jpg": "c49b0650150c74bef4ec23f63e1bb276",
"assets/assets/images/dashboard.png": "1d4216924a81b4a63ede595ba5dac918",
"assets/assets/images/drawer.png": "0bdbc1147f5999820592aeed4c86ef44",
"assets/assets/images/email.png": "49b9a54d1a66305ee959325dc2ebc7c6",
"assets/assets/images/formFillup.png": "1f8bc136c0f966929ba4c24e8a1fe4ce",
"assets/assets/images/goonline%2520page.png": "df4647bff8fcb03e38ba88163ca5ae01",
"assets/assets/images/icons8-github-500%2520(1).png": "f71afc2ac35c753ae59afd96ca3e957a",
"assets/assets/images/icons8-instagram-500%2520(1).png": "373f41494138ecb432e9e73732ac2c2b",
"assets/assets/images/icons8-linkedin-500%2520(1).png": "08ca3cc015a9a05e8680da4b4d586b33",
"assets/assets/images/icons8-phone-500.png": "de79ec4b97d045ee757461694f41f629",
"assets/assets/images/myLogo.png": "1a4bdf6537fe4510ec923ce3b9028ee4",
"assets/assets/images/nearby%2520Driver.png": "00e5d5610c979bb0b1903aaff1fe0057",
"assets/assets/images/notificationPage.png": "41aa272af3dadc31dc1395061517475b",
"assets/assets/images/pickup%2520location.png": "6bd226ed27be950470ba101b5f257755",
"assets/assets/images/profile.png": "242458c3f76028665dee14171515053a",
"assets/assets/images/sajilo_ambulance1%2520.png": "dc73e8361da83649b6c2ed7f57c92252",
"assets/assets/images/sammansvgAsset%25204.svg": "68d89ab45b347c8603117f552a2a8647",
"assets/assets/images/skycast.png": "108db972d2a4e16dbbba11a7c1f4e51d",
"assets/assets/images/skycastHomepage.png": "e83401b30cb68fbe88cf77c81ef2127e",
"assets/assets/images/userLogin.png": "08b99326271b109a3a5e3c1b8af7f3ef",
"assets/FontManifest.json": "18b5225abab13f2fc1abc4342353a797",
"assets/fonts/MaterialIcons-Regular.otf": "77b44589837187b6a67f33a4d0018c1e",
"assets/NOTICES": "f0a23ed14d676d45dd591cda3fc09b9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "b08f27a9c86bb76ab0326904566aa1a8",
"favicon.ico": "31f4c20a67eb84d3dd7cfc23dd3f9d54",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ff84725bd152a7971c38283ccafe1c7a",
"/": "ff84725bd152a7971c38283ccafe1c7a",
"main.dart.js": "bb2225de46cdf68181331260b68e2d8b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
