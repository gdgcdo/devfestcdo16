/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-box/app-box.html","bad81da0da6661cba3b585efd7732faa"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","a7474857c8dd25d6a9e5aabe763ec01f"],["/bower_components/app-layout/app-drawer/app-drawer.html","687ac17c2c0adca1adc4031ec5d2f335"],["/bower_components/app-layout/app-grid/app-grid-style.html","e899275e1247821ae96efa7da4af6739"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-layout.html","8c1748893c5a70c63a6cf83cc85fad1f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","bc1ca312eb9192253e0c8a2a267eb45e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-localize-behavior/app-localize-behavior.html","9f3c59ea36dcb0bfb560dd6adf3d1372"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","ee6897a01647904badcc856c1a4cb6ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-apis/google-youtube-api.html","95c7667f30f21ec613a3ffd1f716832e"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","2f0fe724867a99ad81db369c1c234c20"],["/bower_components/google-youtube/google-youtube.html","3e9bf955b6c91b9ebcdc9ba90694de65"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","6d09d1bd7317183aaa17fc78c1a8edd0"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","70904f32a519b07ec427d1a9a0c71528"],["/bower_components/iron-dropdown/iron-dropdown.html","0e2352a228fb17f90c345a4ffcca4b30"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","0ca9fd93d23992a9340ce7c433557226"],["/bower_components/iron-location/iron-query-params.html","36db93ae0855b5ba4210d6d22d76d8a7"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","1607d4d8a7d922ade7894167368ccc31"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","9e9090df0515a2c8b755bd9c2e944b45"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","ad45cbe59acee470fd6fd225082f1a9d"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/marked-element/marked-element.html","06fedd5fd9adfe0e8ee8159c9130abf5"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","eb770edf3f9eec6adb25b8fe65e15312"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animated-pages.html","8bb61cb8467f755163cec87e954425fc"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-card/paper-card.html","d16397757d387d8d095e5a85f5b016ab"],["/bower_components/paper-checkbox/paper-checkbox.html","6a891a16405b9578c46dab7dbdcda1c9"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-fab/paper-fab.html","0b58f095f983bb4ff0557662d7978aaa"],["/bower_components/paper-icon-button/paper-icon-button-light.html","725ebc58ebba6519578c142d3b9edb10"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","794d6d48fd81620a935f7702b56c9853"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-item/paper-icon-item.html","17d1540072712073af1a84ae9b0ba06a"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","8b91d21da1ac0ab23442d05b4e377286"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","2b2f79e8b3b50e4aabd2dd3ada9b6814"],["/bower_components/paper-menu/paper-menu-shared-styles.html","9b2ae6e8b26011a37194ea3b4bdd043d"],["/bower_components/paper-menu/paper-menu.html","5270d7b4b603d9fdfcfdb079c750a3cd"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","24210b806838797844a91a0b83771bbe"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","4239831dfe30b1103bafb24acb53162b"],["/bower_components/paper-toast/paper-toast.html","f64d10724104f3751cae8b764aef56ff"],["/bower_components/paper-toolbar/paper-toolbar.html","ff99e4e6d522685e7e4d04f290e8ac9b"],["/bower_components/paper-tooltip/paper-tooltip.html","ba34997662a16417bf99bac94287a986"],["/bower_components/polymer/polymer-micro.html","a56af7465d1962ddad3e552367e75faf"],["/bower_components/polymer/polymer-mini.html","9e9dfb157eae29a59c98343288d4d120"],["/bower_components/polymer/polymer.html","3f035bd142ad63df499ddb2f4a9b8ae1"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/time-elements/time-elements.js","a3f49327ed2412dc9044077500392a59"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/data/blog.json","0c3c650d0503aba52f9a1c0acb362a84"],["/data/en/resources.json","e337c856c572b6e3dfc02c72f6ebe882"],["/data/hoverboard.config.json","79678cba64427aa607fbb896e968931c"],["/data/partners.json","57c61836f3afe5ebe609e38d76058088"],["/data/posts/2015-10-24-devfest-ua-summary.markdown","68c408c5dac1a4299379a031482c63f5"],["/data/posts/2016-05-04-devfest-2016-announced.markdown","bdb4d8f7d8c62d4ffc6ef7d65bcc6876"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/2016-07-13-women-in-tech.markdown","94861acdf1d29e359caaef05e599a385"],["/data/posts/2016-08-03-platinum-sponsor-corevalue.markdown","0421deed149e035d0ab026eda75f5a18"],["/data/posts/2016-08-05-diamond-sponsor-intouch.markdown","aa98a753d5d96036c977e497083408fa"],["/data/posts/2016-08-09-interview-with-yonatan-levin.markdown","f7d66ac7aa9d7f62a1ea9fed6cfab41f"],["/data/posts/2016-08-15-interview-with-carmen-popoviciu.markdown","e815065104fd4b1be9bf8e11b2554d9c"],["/data/posts/2016-08-16-platinum-sponsor-n-ix.markdown","e8e4b2f92702c4777fcdd2ab8f791586"],["/data/posts/2016-08-23-interview-with-sascha-wolter.markdown","18d65b5881413953601593040850300d"],["/data/posts/2016-08-25-platinum-sponsor-dataart.markdown","81d960152ea5681e2a0538a8ffebaa59"],["/data/posts/2016-08-26-interview-with-konrad-dzwinel.markdown","1154478f3e31877c6050acdefa340a4e"],["/data/posts/2016-08-26-why-pwa-next-big-thing.markdown","ffc92988ba2c2ef4095514361797704a"],["/data/posts/2016-08-31-platinum-sponsor-global-logic.markdown","550740316224929e08f636610310144b"],["/data/posts/2016-09-01-reasons-to-visit-devfest.markdown","c3c09e232a653c71a3310c244ef0d01f"],["/data/posts/2016-09-03-platinum-sponsor-zalando.markdown","f8e3877dd94a324e536d881dd85911cf"],["/data/posts/2016-09-04-make-the-most-of-lviv.markdown","d42dd1729da3108bab6abc5195036d6b"],["/data/posts/2016-09-07-preparation-checklist.markdown","e8f63be9571433b689dd9d255e769578"],["/data/posts/2016-09-10-dfua-summary.markdown","4bfd972fec56747064420873facd892b"],["/data/posts/2016-09-29-thank-you.markdown","c78790e3524fb0a9c63e14e8617e6ec1"],["/data/posts/code-of-conduct.markdown","d36b81f26dc0701bf2d5f8924f2fb4d8"],["/data/quotes.json","0f3cf9576b97beea05a1a48c53600894"],["/data/schedule.json","25b022f7ce774620497f481828f79531"],["/data/sessions.json","4d03e679dd355ae26f646a68bcf1332d"],["/data/speakers.json","aa07f9ec3a9b6a268dcd68d3ef84774e"],["/data/team.json","375aafd338d85af92d04a7285d2cb426"],["/data/uk/resources.json","4cc0469920aa2da068aff08c9f0dc4da"],["/data/videos.json","d33a117f430cbdb53d3c59b95a51fd8c"],["/images/backgrounds/2016_1.jpg","a9a48cdc8f6923a943c79bdcb1750f91"],["/images/backgrounds/2016_2.jpg","1f92e855d8116dd49061293e663ac18a"],["/images/backgrounds/2016_3.jpg","7e72670e5821464dae924c7d9b5c25e9"],["/images/backgrounds/2016_4.jpg","efb07fa51cd9cadd56c8afa6b344ae00"],["/images/backgrounds/2016_5.jpg","78baacea40feaef034ff9fb20a8262cd"],["/images/backgrounds/2016_6.jpg","e07d362b5317120bf296cfba7f29a645"],["/images/backgrounds/2016_7.jpg","7eaec7e8ecfd1e48d224b1f9021938eb"],["/images/backgrounds/2016_8.jpg","7ce480846fc169121da44a271f9a0005"],["/images/backgrounds/2016_9.jpg","43c419adc0cb1665c6df52895e76339c"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/fireside_chat.jpg","84b9cd6907d463b171baac09ca5c2657"],["/images/backgrounds/home.jpg","513c7b5de4d85c0b7b41104ec6657ffb"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","4bd54983d086075a8f600f46cf03fa5d"],["/images/backgrounds/location_2.jpg","c85ceb144b93b8bc53ab4767c5a04d75"],["/images/backgrounds/location_3.jpg","3391dc540ffa9635d1aeeee3086716ea"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/professor_fortran.jpg","e368f5b9b9b99e18d128c026e757e629"],["/images/backgrounds/quest.jpg","fa4db14f3dcf823b9fac56359c9574bd"],["/images/backgrounds/quotes.jpg","5af357746d05e7dc262a65efa41f62ac"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logo-light.svg","645a240becbd59ff24094c48bc4227c2"],["/images/logo-white.svg","b739b32510136ca0c51a975a8259e400"],["/images/logo.svg","56c49eb2e50662ba475ed99f22698a0a"],["/images/logos/android_weekly.png","fa25bb2f08339cdcd146c8832964409f"],["/images/logos/angularzone.png","6fe709e73c8dc8da69bc61d7d3926b1a"],["/images/logos/applause.png","27aeac9affe071ed7c4d915ea7b505bc"],["/images/logos/applause.svg","a8ab927641e829ccbbd612cd224e848c"],["/images/logos/archilogic.png","9d10817c90daa8c37031e6a2f61c1a34"],["/images/logos/betaplace.svg","00000d81012de4b6b1612a76bf2fd15a"],["/images/logos/brainly.svg","3216d8b646fdc9148f589b8b04790a57"],["/images/logos/buildstuff.png","50ed5c060f81273a229db69204044482"],["/images/logos/cbs.svg","fff1e98071ec900d4cbe9acdcccdb398"],["/images/logos/ciklum.svg","8559f7c648e1903aa63bf9f02f9f5f12"],["/images/logos/codeguida.svg","ca0f1671c0f629987c13471dae37e2a9"],["/images/logos/coders_guild.png","3f9f8a28ff786aa4bea3c9730ed376ce"],["/images/logos/corevalue.svg","aef6d59534f7e3e308a820128f7b9892"],["/images/logos/crowd_reviews.png","adaf7a4c2ad9a35204a759b8c91b3c86"],["/images/logos/dataart.svg","4c08adb8ccbb83c94e253a3d23e13f37"],["/images/logos/decoded.png","a95f4e067e748d5acbd2515598d48b1d"],["/images/logos/designprof.svg","aed48d4b2c9342f5f621e20ca45c0a76"],["/images/logos/dev_challenge.svg","b701831144b833299da5d2e5597b9162"],["/images/logos/dou.svg","bfef3bbc58b7d313cff9232620352178"],["/images/logos/droidcon.png","6cbcb24cd1176e9770a44f0137d251bc"],["/images/logos/droidcon_vienna.svg","e7faeb6b08413b35989accfdf2825c41"],["/images/logos/duetsche telekom ag - group innovation+.png","60aeb90a1ec4ece52c877e8f63606532"],["/images/logos/epam.svg","8b77945b19210fcaf0267dde5335ce8a"],["/images/logos/eurasia.jpg","67f313f3e289f0ae6c6cbdc3a88debb4"],["/images/logos/fm-standart.svg","a64d2c65db8c5e7b3865301d381d43cb"],["/images/logos/forum.png","6276f2ec5b260b7361ec448c5267bf72"],["/images/logos/gdg-lviv.svg","557e52d18aed88a36197d1388c67c985"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/getsocial.svg","90479a1e251e0b6488d47bf66cf3a9ef"],["/images/logos/gett.svg","f32e605480cccac9d76799f61677acbd"],["/images/logos/global-logic.svg","ef9f68d111fa73ef27227c94681beffd"],["/images/logos/google.svg","e0d5ebf3026ad110cdf17e3b990271e5"],["/images/logos/hotwork.jpg","6eb595e8b99adab9273b2cf83400865d"],["/images/logos/ibis.png","3679e450467433a1d42b9dc91d1bcde0"],["/images/logos/ig.svg","ecb196477e3494b17c7f2edb561ca5b5"],["/images/logos/ihub.png","15c7f0f3e21c35727b8438a3e0a8cdce"],["/images/logos/infopulse.svg","b3bbd2100998bcac5e3ef2badf8ad88f"],["/images/logos/infullmobile.svg","b374b8e8b20334cb43fc837075ba4911"],["/images/logos/innovationbox.png","4a0ad7175b468dd49a71e7ad7c7e0c52"],["/images/logos/innovationbox.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/logos/intouch.svg","a83907e7efe879079aa987446882b157"],["/images/logos/it-arena.svg","8e06377e032d332cb54db72635d7fb30"],["/images/logos/it-cluster.svg","7814102c68f49816f8056a755aaac1dc"],["/images/logos/itea.svg","fd4d0d0b4d24fb442190849e66ae893c"],["/images/logos/itea_hub.png","7e5e6eb39be718b651fa7c7ba56e74da"],["/images/logos/item.svg","6baf724ece3244da76a121cc43d5aed7"],["/images/logos/itvdn.svg","557e2020fe5f4045e55d91551300ea89"],["/images/logos/javaday_minsk.jpg","ea0552d6dfcc4c862418a6fd31d2b22d"],["/images/logos/jday.svg","9292c9b971e21227d1c226abe0f31763"],["/images/logos/jetbrains.svg","e846a47c761d4e547188bbc43c31a354"],["/images/logos/jsodessa.png","4ed0d0defcf878f0d75c49c590227ea2"],["/images/logos/juicymo.png","f0c47751896140b403ddb23416933bb9"],["/images/logos/kharkiv_itcluster.png","6f1ea94561846f4f2571eae3127c96a8"],["/images/logos/lcb.svg","7f36f961482e6ee40f982f9ce73fcaa3"],["/images/logos/leverate.svg","08cef2c7743be08e85380eac9662f56f"],["/images/logos/lits.png","6f55910c88f64da29feb71809a7052d3"],["/images/logos/lohika inc..svg","1de3bf45383f812d343e197c0e00b893"],["/images/logos/lviv code school.png","9ea27da768ef59369f10894cb9b6abeb"],["/images/logos/massage.png","d3f09028eab0a5acd7b2e449dba45567"],["/images/logos/mirantis.svg","81902c8e7c79e3baf2379549c88dc76f"],["/images/logos/mobile-warsaw.svg","4e7afe52f34ec42609ce73b0f53fa145"],["/images/logos/n_ix.svg","dccc563986dae157e06931fd8484faf5"],["/images/logos/net-days.png","cd0a518d030010b620072c88e12c49aa"],["/images/logos/perfectial.svg","fb9f45a7126c98923883aee0e4eb7c6f"],["/images/logos/phpday.png","7b75a375aecf18c5952cafea640c5189"],["/images/logos/pixplicity.svg","f1dd2e0ecd92a95b293b31e4ee2badd2"],["/images/logos/robocamp.png","b9334fd338f21d37392ffeec5b19ceb6"],["/images/logos/rozrobka.svg","aba2d608375b661cf557866867a73a79"],["/images/logos/ruckus.svg","2b0657332763cb21578c88861677799e"],["/images/logos/se.svg","eabdf2ee6bfeb7e8e48a45252502db73"],["/images/logos/shipito.svg","c78aa31bbee2512d9fb869d9e336a2d0"],["/images/logos/sigma.svg","8151951edd4074442397b4dc02aed954"],["/images/logos/softserve.svg","40bfa3e7c1f64e5b86d3bfed7cd12a92"],["/images/logos/sphinx.png","e231f976081b2c0c3a9b90e7ef90bbe7"],["/images/logos/stanfy.svg","8535349eed1fa56d0567301ee8117ca1"],["/images/logos/start_it.png","390a45a4c9c8c260a7503a3b9795bee2"],["/images/logos/startup_depot.png","bc5740ff77e6fd037778827688422cfa"],["/images/logos/step up labs.png","81dbeb934ccddad39a137370221e91ca"],["/images/logos/stiy_stil.svg","93dde81ab33068ca22f2373724507f37"],["/images/logos/stylight.svg","9b28d58969072fc623b35623f2cfbace"],["/images/logos/sygic.svg","40b581c5b35c1bf0d1222704192a2600"],["/images/logos/symphony-solutions.svg","06eeeffeb2d8505fa095bff78922b458"],["/images/logos/techmagic.svg","07d7d4508ea763e45edf35e83a233d15"],["/images/logos/timee.png","0c98bb6131a52466b769205a5fd92bf7"],["/images/logos/uamobile.png","1a0f2cac25cf8e5d4462a75feccba7c2"],["/images/logos/web_academy.png","85a02b55c4b4fc470739b90d3caeb74a"],["/images/logos/widespread.png","7249618a4f2a8c14674f2c432407abb8"],["/images/logos/wolters kluwer.svg","bc1743e0db916d6c4140d507c8e66c6d"],["/images/logos/yamert.png","5997fcbea3339a087661af4d7009ef89"],["/images/logos/zalando.svg","4af8709eaa081a93c110708099ef78b8"],["/images/people/adrian_kajda.jpg","791eef1edd26abab83ecd1560dadba3e"],["/images/people/aleksander_piotrowski.jpg","99f0c44cc5e91f107b4b51f3efd96d45"],["/images/people/alina_yurenko.jpg","e871755b3189671b11c46383dacb81d8"],["/images/people/anton_minashkin.jpg","a140c9eea1b10ac53df4a4656f64173b"],["/images/people/carmen_popovicu.jpg","d42e15122a0c9bac269ecb47f4648526"],["/images/people/constantine_mars.jpg","c7a0597c1209132ebad4e0a2cf7f81c4"],["/images/people/david_vávra.jpg","eae48c570081cdbfb0fb3a9a7c9a7592"],["/images/people/diana_pinchuk.jpg","df9a64c4b5033a84cd6f6f9d82fc7f5b"],["/images/people/dmytro_danylyk.jpg","1137be3f495c28c8bab7c2659e2c93a8"],["/images/people/dmytro_zaitsev.jpg","1c0f6369c9dd147fd184ae79f5ebce01"],["/images/people/eliza_camberogiannis.jpg","3121caa58cabbfd072b3d0a4dc890f71"],["/images/people/gerard_sans.jpg","f8baeae079cc07201bb16135882de2a8"],["/images/people/ihor_dvoretskyi.jpg","63323bcc216caaa57e466ec5cb7b592d"],["/images/people/jakub_škvára.jpg","b36d1b2b7a79406456e71994e6bbbaaf"],["/images/people/jana_moudra.jpg","a6e4961330e15c61224cb57236d1d2b2"],["/images/people/jean-baptiste_clion.jpg","2963ab4d6c7c8aaf9bd6f42082bba67d"],["/images/people/jozef_vodicka.jpg","563540bb87e1be510c4c2c3b1ba2b2b7"],["/images/people/jule_palenuchka.jpg","5b5bf382a7f31b807e43f3f894f4c339"],["/images/people/konrad_dzwinel.jpg","681219ff9f27af58f47b442f996046c9"],["/images/people/kseniia_shumelchyk.jpg","07ef43408d7c07319decf25980391219"],["/images/people/marta_maxymiak.jpg","7e9bdf47c7d701852bd905223e0f17da"],["/images/people/marta_ryzhok.jpg","2e50b77280734de2d08b2e0d45881d3f"],["/images/people/martin_splitt.jpg","e6ec63102fbc12f3926f41d78c4d07c2"],["/images/people/mateusz_herych.jpg","a03cb493f486f84da9feb62ba54c8ea0"],["/images/people/matthew_mosesohn.jpg","0d96422d4daa29c0ebb220c1b9bfca23"],["/images/people/mete_atamel.jpg","ab604044d8f449c2fced2a5f88aa3f17"],["/images/people/michael_pustovit.jpg","ba3aefbd0a76ac8a8e8300efead3013d"],["/images/people/michal_rostecki.jpg","f0e8910269b66545ba627c20213cd426"],["/images/people/oleh_zasadnyy.jpg","6f197bc92b41cbfa37fbe2d1c8ed86af"],["/images/people/olga_gorokh.jpg","ca2148a8f82964f15cb328312fd68e1e"],["/images/people/ostap_andrusiv.jpg","075350bcb64d4ae4e39c23f10a864215"],["/images/people/peter_tuszynski.jpg","e77d689d303eb47bdf84c48b65ec3949"],["/images/people/professor_fortran.jpg","3a3c9425e87e11f66903e4ed23de8207"],["/images/people/resul caner_yildirim.jpg","b18e8519c191dd5f4536fe20cd53caed"],["/images/people/roman_herasymenko.jpg","69509c63fcc7e6576fd53ff515490eab"],["/images/people/rustem_arzymbetov.jpg","d816d7cd70bfa54b5f11a4efd5c9b666"],["/images/people/sascha_wolter.jpg","d0b92d6fd9c4acf92044052b6878e1cd"],["/images/people/sergii_khomenko.jpg","68867ff3ac46fad06966e0b34b23d86b"],["/images/people/sergiy_mokienko.jpg","16b83991b0276e7a272a6aa9871a0972"],["/images/people/sofiya_huts.jpg","3a2bd95ba32b4c0f5106b66bcfc0deec"],["/images/people/valentyn_shybanov.jpg","9de0022f06a50b9dce005bacaa100345"],["/images/people/vasylyna_mytsak.jpg","cce1ac571872da83d07d25340feddb0c"],["/images/people/vitaliy_zasadnyy.jpg","0541dd494eccbc99cbf3b471fffd4458"],["/images/people/volodya_karpliuk.jpg","617cc4a3200ed7fa6fac09c9da5e3232"],["/images/people/yonatan_levin.jpg","933fae5d3c7ea6f62b9a6a27e52f02ab"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/attendees-statistics-experience.png","1fb36fc545f40f96066a51e265e337e8"],["/images/posts/attendees-statistics-specialization.png","2305b3bce80dca073e17f83f09bed4ac"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/checklist1.gif","97390d7af33da5f4016aa3d454f55bcd"],["/images/posts/checklist2.jpg","e289c9406a82eaf43db33a4f441c5510"],["/images/posts/checklist3.jpg","ca7e6ac2bc0cf4a815464094e5e22365"],["/images/posts/checklist4.jpg","800af044095c936dc349767e6812afc1"],["/images/posts/checklist5.jpg","d538910d2067ca066aea8b7c8e4e77ba"],["/images/posts/checklist6.jpg","d7e54e91436acb1e2bebd327a29d0383"],["/images/posts/corevalue.jpg","88cb81cccf4bda6d74a728a84a995e44"],["/images/posts/corevalue1.jpg","c0c287122fa2ba430c0fd2eb89cda69a"],["/images/posts/corevalue2.jpg","38c290f75d26fcf4ebb5e9e682d4982b"],["/images/posts/corevalue3.jpg","3104232a4968d248e84c92bdd4575588"],["/images/posts/dataart_cover.jpg","46b4821d2a4264f459707b981385a4e3"],["/images/posts/gl_cover.jpg","3174177160d6776dd631d902206fbb39"],["/images/posts/intouch0.jpg","9d5484c8736cc48d65d19949ddede1e0"],["/images/posts/intouch1.jpg","860c913731b4987dbec354e63119e58e"],["/images/posts/intouch_cover.jpg","fca7329f7a16b9c93c80c6ebb806062c"],["/images/posts/konrad_1.jpg","9ecf58db8aa156182383288d1a232f66"],["/images/posts/konrad_2.jpg","7fb499479786889e6c41b0b8c49aa48e"],["/images/posts/konrad_3.jpg","277d51a9fa5fdf8c4435eb3f79311819"],["/images/posts/konrad_cover.jpg","6a14d9eead36de7926ac1057700957f4"],["/images/posts/lviv_1.jpg","fab64fff9571b7216a8d56484fafb2fa"],["/images/posts/lviv_2.jpg","4ec093f30066c3c56f01d3c90eb4e32e"],["/images/posts/lviv_3.jpg","2729ae43b21375c4fea6b3518122a440"],["/images/posts/lviv_4.jpg","4cca3db938aa5732e122b3cede63919f"],["/images/posts/lviv_5.jpg","a9c7c78f63b4a5d9f0dc9a44a8161dc0"],["/images/posts/lviv_6.jpg","1dfb864b1ba0be7daa1256eb59a23c6f"],["/images/posts/lviv_7.jpg","d6b247a5e1046759dd7e796a2b8e80a0"],["/images/posts/lviv_8.jpg","2712bfefc98ce511f16d7bcf6e13320f"],["/images/posts/lviv_9.jpg","1d43aa661552fde03c96d48482f3dc7c"],["/images/posts/lviv_cover.jpg","d21f9038a0ed0ad4fb0f9b2b5b1b9eb3"],["/images/posts/nix_1.png","c9c5db4173e5f6464fd0d10e07649c74"],["/images/posts/nix_2.png","56a3fee512fee23df0bd1b390f594118"],["/images/posts/nix_3.png","ee550d4987ea24da771c8e958cb7691e"],["/images/posts/nix_4.jpg","cab1cbd4e784587500c06e1843f8afb5"],["/images/posts/nix_cover.jpg","53297ff8e167006352985cf5ba6182a7"],["/images/posts/popoviciu_1.jpg","78a38772e21820e3808f7f6b26ab85bc"],["/images/posts/popoviciu_2.jpg","6e9577aea25185087feec173067f5d43"],["/images/posts/popoviciu_3.jpg","62f7fd18eec2f82ba42241a0635c9fe9"],["/images/posts/popoviciu_cover.jpg","264189b5a6afe4af4eb3e967a5baaecb"],["/images/posts/pwa.jpg","9879d0b641125462a3f757ae9eebbb18"],["/images/posts/pwa1.jpg","7e02c21bfad22ce44ccf7695b8911ee7"],["/images/posts/pwa4.jpg","bda38fbcff2532486739d01c610d7cd5"],["/images/posts/pwa5.jpg","26a27c6da80b52b8ea22e13f48127630"],["/images/posts/pwa6.jpg","29e9ac37a900da7a7cece89a04d9875f"],["/images/posts/pwa7.jpg","118a2a97b841b8e94c9e03843af4d4b8"],["/images/posts/pwa_cover.jpg","0f78396c7d0bf62ca63bc4cf32d2dee8"],["/images/posts/reasons1.png","fa29b4b819e49c249e4dc13f0b1e8372"],["/images/posts/reasons2.png","eecf7b0d9b087090812bede43ba5c4f9"],["/images/posts/reasons3.png","578febee7fa6e82f89e3d4be958a7f19"],["/images/posts/reasons4.png","02239c2a291b5df1875124bf6c7d12f5"],["/images/posts/reasons5.png","9a3de511b4d4b225643ba196925195ef"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary16_1.jpg","7de064799869a5fe1afeaf86588c028a"],["/images/posts/summary16_2.jpg","a47640a2994a0a73a59de55249fb82a6"],["/images/posts/summary16_3.jpg","8012b53005ee95258655523b2b3d684b"],["/images/posts/summary16_4.jpg","0874a236dd8afd9dd7a1ca4ef83e6078"],["/images/posts/summary16_5.jpg","a5964c6d101e5f6aa95f84ed5dc724bf"],["/images/posts/summary16_6.jpg","caed84fb2494c84fba212141fc94a594"],["/images/posts/summary16_7.jpg","9af75d0743ab6f8ad2a3f8cc56a330b6"],["/images/posts/summary16_8.jpg","5a8f700294aaab82ef11d54a7e7620de"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/posts/thankyou_6.jpg","4ef275f96f7418ea6d973f90e479eff8"],["/images/posts/thankyou_8.jpg","a182d94e6f2fa02dd6f60b3fdb755002"],["/images/posts/wolter_1.jpg","7920487a99ce66bce03b0f71948cf9b5"],["/images/posts/wolter_2.jpg","f1d73d1d1406a526b9e0866624505b07"],["/images/posts/wolter_cover.jpg","cf8fca679a7fbdcff26b45cdc23989f1"],["/images/posts/women_programming.jpg","71c1f234e41737bcab00bd7a558f691b"],["/images/posts/yonatan_1.jpg","6b21b515b55a8321f1c9773dce756263"],["/images/posts/yonatan_2.jpg","7d47e70110e6306efa6eda2545f39f0a"],["/images/posts/yonatan_3.jpg","5203f266c9bf28eb8ced144da2f665ff"],["/images/posts/yonatan_cover.jpg","fb647d8c2488e48314f4f7de9ad12f7d"],["/images/posts/zalando_cover.jpg","b85aeb5ea1c1ece7d9bd7e38624af2f6"],["/images/sessions/101.JPG","ede88fe70af4490b679cefd1ce1e5089"],["/images/sessions/102.JPG","bbdb4ca9cd529504f4e3a753aeee733d"],["/images/sessions/103.JPG","224b230f4bb13c6ff1d46f619ef803ed"],["/images/sessions/104.JPG","73bad1eb58418b34a464911d3ec93f41"],["/images/sessions/105.JPG","111f9e298a0c75cca4ce4a4bc18fc670"],["/images/sessions/106.JPG","f1eb952cb454b74de96bd4e3907107d0"],["/images/sessions/107.JPG","8231c85cf0d0c19c03fefd00dcb6be25"],["/images/sessions/108.JPG","481a5aff3eab28bbcde894cd8bf01afa"],["/images/sessions/109.JPG","1573d7d1302da1b08f08ce0176c44714"],["/images/sessions/110.JPG","e0fbc859296bad2c71f0a23084d59410"],["/images/sessions/111.JPG","fc52d9e46fa8403336782eeee3397ae7"],["/images/sessions/112.JPG","85270c0e66bc27c8faa2a7f61645e29e"],["/images/sessions/113.JPG","51fec4ff43dc798b30fea374b2ab8e6f"],["/images/sessions/114.JPG","9f9bf0b0e7f91ad483d63e37df977c1d"],["/images/sessions/115.JPG","606958de9bccb22c3bf983153bdce886"],["/images/sessions/116.JPG","18498b45a03bc9681a65f43957431711"],["/images/sessions/117.JPG","ab525002817d6b6ff87daf169de3d15c"],["/images/sessions/119.JPG","161a228686bb400ba188c8df058bd8ed"],["/images/sessions/120.JPG","aab4f9cc5d8c0fae92fe3e55866b58a9"],["/images/sessions/122.JPG","3ecb36e2284df6cb89816a3f4b9d38ed"],["/images/sessions/123.JPG","701c7edc8cb398b857114209fb234271"],["/images/sessions/124.JPG","a911c75a697e7dca346bf259d6cdd6d6"],["/images/sessions/125.JPG","7d1846ed159325b9ee348c3f8f0bf883"],["/images/sessions/133.JPG","bc6011fb13b75b695b848ab7c31efa39"],["/images/sessions/134.JPG","668ebe1db886c5ac44474bd3753a196e"],["/images/sessions/135.JPG","10370c66d83100cf54e15eb50d252302"],["/images/sessions/140.JPG","af7741e0a0b12bc11e19b169bdd107b3"],["/images/social-share.jpg","546e13081b2d268d276cdb245b484b23"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","10994e8e9ff89f8a8e719bbe0328a273"],["/manifest.json","7b74954fc923d09673025201fe182979"],["/scripts/analytics.js","39a279965b3729554db6e099077786e7"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/cascaded-behavior.html","730852d4e5815517a98f15788ba2c56c"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","bed1462f08b432d21111284783e15353"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","ce92a206db2e4d0fe465442c40293736"],["/src/elements/call-to-action.html","561085bb4e4c331b231207a65ac96f09"],["/src/elements/drawer-block.html","5179c023fe1816cf38a543e761c9dcfd"],["/src/elements/featured-people.html","254d16cf2e8ed54ffab8ed8b3f8e61ea"],["/src/elements/featured-videos.html","813766e92ed50a19a5b38d318f6eba8d"],["/src/elements/footer-block.html","961b92fb6462ebedd654b83ef409848d"],["/src/elements/header-content.html","c98eb36b3ab8ac505f1b10a51b1c41e3"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","6237343bedf8dbdcaef81d89ebcfe71c"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","f4f3311ae5b41f230a3341105e1327a9"],["/src/elements/photo-block.html","9dfb6dc50c161e2d3f4a1904f1c92293"],["/src/elements/quotes-block.html","19dec4d3291658016d73a2204d2c323f"],["/src/elements/schedule-day.html","70eeb69e892e57832ec4de3cf6ee81c3"],["/src/elements/schedule-subnav.html","b07aa2953b04fc1f343f614f23ab3974"],["/src/elements/session-details.html","4130f936a5a72320140be13d1948106c"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/subscribe-block.html","e65787dc59227761aaaf64422001ea9f"],["/src/elements/ticket-element.html","5987eb876d95e02b8998c6c2f0e441b0"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","98359bdea80551d1a42cc76c23292fae"],["/src/elements/toolbar-block.html","2d4e47e0de6a0a2940ef1ac08d20d361"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","f5737ff4b9853084268c12c5dab1c82a"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","8a855f78363acb6d707809249fe17c2d"],["/src/pages/blog-page.html","afa64e7338835d198445edd9dd101acb"],["/src/pages/cod-page.html","ac1c4ec6d112edf2de4246feea841d2f"],["/src/pages/home-page.html","f7623964c6a140aeb0f3ca4e59a3bdf8"],["/src/pages/hub-page.html","1b1b387d92d603b91c472504e492270d"],["/src/pages/post-page.html","258f5f9754d070f5441958cdccb12b1e"],["/src/pages/quest-page.html","82cb6329b5dca4bb9a3c1953c0e5870d"],["/src/pages/schedule-page.html","808ff3ad2f425a776941301898c58982"],["/src/pages/speakers-page.html","0e25b5cfd8389a9eb480decec73127ee"],["/src/pages/team-page.html","b09e5239839b694d69010eba4c0416bf"],["/src/styles/dialog-styles.html","3b77caf32729d5ad12e130eab4e4012d"],["/src/styles/icons.html","5d416461f69185473f22d1106d427e09"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","966d64e160abbfb1a2a762bf0676b9ee"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




