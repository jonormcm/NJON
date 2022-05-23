<!DOCTYPE html>
<!--[if IE 8]>
<html class="ie ie8" lang="en-US">
<![endif]-->
<!--[if !(IE 8)]><!-->
<html lang="en-US" class="cmsms_html">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="shortcut icon" href="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/favicon.png" type="image/x-icon" />
<link rel="profile" href="https://gmpg.org/xfn/11" />
<link rel="pingback" href="https://www.sanctuaryphiladelphia.org/xmlrpc.php" />


<title>New Sanctuary Movement of Philadelphia &#8211; Interfaith Immigrant Justice</title>
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="New Sanctuary Movement of Philadelphia &raquo; Feed" href="https://www.sanctuaryphiladelphia.org/feed/" />
<link rel="alternate" type="application/rss+xml" title="New Sanctuary Movement of Philadelphia &raquo; Comments Feed" href="https://www.sanctuaryphiladelphia.org/comments/feed/" />
		<!-- This site uses the Google Analytics by ExactMetrics plugin v7.5.3 - Using Analytics tracking - https://www.exactmetrics.com/ -->
							<script src="//www.googletagmanager.com/gtag/js?id=UA-66104613-3"  data-cfasync="false" data-wpfc-render="false" type="text/javascript" async></script>
			<script data-cfasync="false" data-wpfc-render="false" type="text/javascript">
				var em_version = '7.5.3';
				var em_track_user = true;
				var em_no_track_reason = '';
				
								var disableStrs = [
															'ga-disable-UA-66104613-3',
									];

				/* Function to detect opted out users */
				function __gtagTrackerIsOptedOut() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						if ( document.cookie.indexOf( disableStrs[ index ] + '=true' ) > -1 ) {
							return true;
						}
					}

					return false;
				}

				/* Disable tracking if the opt-out cookie exists. */
				if ( __gtagTrackerIsOptedOut() ) {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						window[ disableStrs[ index ] ] = true;
					}
				}

				/* Opt-out function */
				function __gtagTrackerOptout() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						document.cookie = disableStrs[ index ] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
						window[ disableStrs[ index ] ] = true;
					}
				}

				if ( 'undefined' === typeof gaOptout ) {
					function gaOptout() {
						__gtagTrackerOptout();
					}
				}
								window.dataLayer = window.dataLayer || [];

				window.ExactMetricsDualTracker = {
					helpers: {},
					trackers: {},
				};
				if ( em_track_user ) {
					function __gtagDataLayer() {
						dataLayer.push( arguments );
					}

					function __gtagTracker( type, name, parameters ) {
						if (!parameters) {
							parameters = {};
						}

						if (parameters.send_to) {
							__gtagDataLayer.apply( null, arguments );
							return;
						}

						if ( type === 'event' ) {
							
															parameters.send_to = exactmetrics_frontend.ua;
								__gtagDataLayer( type, name, parameters );
													} else {
							__gtagDataLayer.apply( null, arguments );
						}
					}
					__gtagTracker( 'js', new Date() );
					__gtagTracker( 'set', {
						'developer_id.dNDMyYj' : true,
											} );
															__gtagTracker( 'config', 'UA-66104613-3', {"forceSSL":"true"} );
										window.gtag = __gtagTracker;											(function () {
							/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
							/* ga and __gaTracker compatibility shim. */
							var noopfn = function () {
								return null;
							};
							var newtracker = function () {
								return new Tracker();
							};
							var Tracker = function () {
								return null;
							};
							var p = Tracker.prototype;
							p.get = noopfn;
							p.set = noopfn;
							p.send = function (){
								var args = Array.prototype.slice.call(arguments);
								args.unshift( 'send' );
								__gaTracker.apply(null, args);
							};
							var __gaTracker = function () {
								var len = arguments.length;
								if ( len === 0 ) {
									return;
								}
								var f = arguments[len - 1];
								if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
									if ( 'send' === arguments[0] ) {
										var hitConverted, hitObject = false, action;
										if ( 'event' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[3] ) {
												hitObject = {
													'eventAction': arguments[3],
													'eventCategory': arguments[2],
													'eventLabel': arguments[4],
													'value': arguments[5] ? arguments[5] : 1,
												}
											}
										}
										if ( 'pageview' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[2] ) {
												hitObject = {
													'eventAction': 'page_view',
													'page_path' : arguments[2],
												}
											}
										}
										if ( typeof arguments[2] === 'object' ) {
											hitObject = arguments[2];
										}
										if ( typeof arguments[5] === 'object' ) {
											Object.assign( hitObject, arguments[5] );
										}
										if ( 'undefined' !== typeof arguments[1].hitType ) {
											hitObject = arguments[1];
											if ( 'pageview' === hitObject.hitType ) {
												hitObject.eventAction = 'page_view';
											}
										}
										if ( hitObject ) {
											action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
											hitConverted = mapArgs( hitObject );
											__gtagTracker( 'event', action, hitConverted );
										}
									}
									return;
								}

								function mapArgs( args ) {
									var arg, hit = {};
									var gaMap = {
										'eventCategory': 'event_category',
										'eventAction': 'event_action',
										'eventLabel': 'event_label',
										'eventValue': 'event_value',
										'nonInteraction': 'non_interaction',
										'timingCategory': 'event_category',
										'timingVar': 'name',
										'timingValue': 'value',
										'timingLabel': 'event_label',
										'page' : 'page_path',
										'location' : 'page_location',
										'title' : 'page_title',
									};
									for ( arg in args ) {
																				if ( ! ( ! args.hasOwnProperty(arg) || ! gaMap.hasOwnProperty(arg) ) ) {
											hit[gaMap[arg]] = args[arg];
										} else {
											hit[arg] = args[arg];
										}
									}
									return hit;
								}

								try {
									f.hitCallback();
								} catch ( ex ) {
								}
							};
							__gaTracker.create = newtracker;
							__gaTracker.getByName = newtracker;
							__gaTracker.getAll = function () {
								return [];
							};
							__gaTracker.remove = noopfn;
							__gaTracker.loaded = true;
							window['__gaTracker'] = __gaTracker;
						})();
									} else {
										console.log( "" );
					( function () {
							function __gtagTracker() {
								return null;
							}
							window['__gtagTracker'] = __gtagTracker;
							window['gtag'] = __gtagTracker;
					} )();
									}
			</script>
				<!-- / Google Analytics by ExactMetrics -->
		<script type="text/javascript">
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.sanctuaryphiladelphia.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.9.3"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([10084,65039,8205,55357,56613],[10084,65039,8203,55357,56613])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
</script>
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='gtranslate-style-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/gtranslate/gtranslate-style24.css?ver=5.9.3' type='text/css' media='all' />
<link rel='stylesheet' id='layerslider-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/LayerSlider/assets/static/layerslider/css/layerslider.css?ver=7.2.1' type='text/css' media='all' />
<link rel='stylesheet' id='ls-google-fonts-css'  href='https://fonts.googleapis.com/css?family=Lato:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7COpen+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CIndie+Flower:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7COswald:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CRoboto:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CRoboto+Condensed:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.sanctuaryphiladelphia.org/wp-includes/css/dist/block-library/style.min.css?ver=5.9.3' type='text/css' media='all' />
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<link rel='stylesheet' id='contact-form-7-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.5.6.1' type='text/css' media='all' />
<link rel='stylesheet' id='progress_wp_br_bootstrap-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/css/bootstrap.css?ver=5.9.3' type='text/css' media='all' />
<link rel='stylesheet' id='progr_wp_b-font-awesome-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/css/font-awesome/css/font-awesome.min.css?ver=5.9.3' type='text/css' media='all' />
<link rel='stylesheet' id='progr_wp_jq-ae-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/css/meanmenu.min.css?ver=5.9.3' type='text/css' media='all' />
<link rel='stylesheet' id='progr_wp_animate-ae-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/css/animate.min.css?ver=5.9.3' type='text/css' media='all' />
<link rel='stylesheet' id='templately-editor-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/templately/assets/css/editor.css?ver=1.3.4' type='text/css' media='all' />
<link rel='stylesheet' id='xs-front-style-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/wp-social/assets/css/frontend.css?ver=1.8.6' type='text/css' media='all' />
<link rel='stylesheet' id='xs_login_font_login_css-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/plugins/wp-social/assets/css/font-icon.css?ver=1.8.6' type='text/css' media='all' />
<link rel='stylesheet' id='cb70d11b8-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/uploads/essential-addons-elementor/734e5f942.min.css?ver=1653312080' type='text/css' media='all' />
<link rel='stylesheet' id='theme-style-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/style.css?ver=1.0.0' type='text/css' media='screen, print' />
<link rel='stylesheet' id='theme-adapt-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/adaptive.css?ver=1.0.0' type='text/css' media='screen, print' />
<link rel='stylesheet' id='theme-retina-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/retina.css?ver=1.0.0' type='text/css' media='screen' />
<link rel='stylesheet' id='ilightbox-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/ilightbox.css?ver=2.2.0' type='text/css' media='screen' />
<link rel='stylesheet' id='ilightbox-skin-dark-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/ilightbox-skins/dark-skin.css?ver=2.2.0' type='text/css' media='screen' />
<link rel='stylesheet' id='theme-fonts-schemes-css' href="https://www.sanctuaryphiladelphia.org/wp-content/uploads/cmsms_styles/social-activity.css?ver=1.0.0" type='text/css' media='screen' />
<!--[if lte IE 9]>
<link rel='stylesheet' id='theme-fonts-css'  href='http://www.sanctuaryphiladelphia.org/wp-content/uploads/cmsms_styles/social-activity_fonts.css?ver=1.0.0' type='text/css' media='screen' />
<![endif]-->
<!--[if lte IE 9]>
<link rel='stylesheet' id='theme-schemes-primary-css'  href='http://www.sanctuaryphiladelphia.org/wp-content/uploads/cmsms_styles/social-activity_colors_primary.css?ver=1.0.0' type='text/css' media='screen' />
<![endif]-->
<!--[if lte IE 9]>
<link rel='stylesheet' id='theme-schemes-secondary-css'  href='http://www.sanctuaryphiladelphia.org/wp-content/uploads/cmsms_styles/social-activity_colors_secondary.css?ver=1.0.0' type='text/css' media='screen' />
<![endif]-->
<link rel='stylesheet' id='theme-icons-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/fontello.css?ver=1.0.0' type='text/css' media='screen' />
<link rel='stylesheet' id='animate-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/animate.css?ver=1.0.0' type='text/css' media='screen' />
<!--[if lt IE 9]>
<link rel='stylesheet' id='theme-ie-css'  href='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/css/ie.css?ver=1.0.0' type='text/css' media='screen' />
<![endif]-->
<link rel='stylesheet' id='cmsms-google-fonts-css'  href='//fonts.googleapis.com/css?family=Roboto%3A300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C700%2C700italic%7CRoboto+Condensed%3A400%2C400italic%2C700%2C700italic&#038;ver=5.9.3' type='text/css' media='all' />
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type='text/javascript' id='layerslider-utils-js-extra'>
/* <![CDATA[ */
var LS_Meta = {"v":"7.2.1","fixGSAP":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/LayerSlider/assets/static/layerslider/js/layerslider.utils.js?ver=7.2.1' id='layerslider-utils-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/LayerSlider/assets/static/layerslider/js/layerslider.kreaturamedia.jquery.js?ver=7.2.1' id='layerslider-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/LayerSlider/assets/static/layerslider/js/layerslider.transitions.js?ver=7.2.1' id='layerslider-transitions-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/google-analytics-dashboard-for-wp/assets/js/frontend-gtag.min.js?ver=7.5.3' id='exactmetrics-frontend-script-js'></script>
<script data-cfasync="false" data-wpfc-render="false" type="text/javascript" id='exactmetrics-frontend-script-js-extra'>/* <![CDATA[ */
var exactmetrics_frontend = {"js_events_tracking":"true","download_extensions":"zip,mp3,mpeg,pdf,docx,pptx,xlsx,rar","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"https:\/\/www.sanctuaryphiladelphia.org","hash_tracking":"false","ua":"UA-66104613-3","v4_id":""};/* ]]> */
</script>
<script type='text/javascript' id='xs_front_main_js-js-extra'>
/* <![CDATA[ */
var rest_config = {"rest_url":"https:\/\/www.sanctuaryphiladelphia.org\/wp-json\/","nonce":"0fe9aa0f04","insta_enabled":""};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/wp-social/assets/js/front-main.js?ver=1.8.6' id='xs_front_main_js-js'></script>
<script type='text/javascript' id='xs_social_custom-js-extra'>
/* <![CDATA[ */
var rest_api_conf = {"siteurl":"http:\/\/www.sanctuaryphiladelphia.org","nonce":"0fe9aa0f04","root":"https:\/\/www.sanctuaryphiladelphia.org\/wp-json\/"};
var wsluFrontObj = {"resturl":"https:\/\/www.sanctuaryphiladelphia.org\/wp-json\/","rest_nonce":"0fe9aa0f04"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/wp-social/assets/js/social-front.js?ver=5.9.3' id='xs_social_custom-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/js/jsLibraries.min.js?ver=1.0.0' id='libs-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/js/jquery.iLightBox.min.js?ver=2.2.0' id='iLightBox-js'></script>
<meta name="generator" content="Powered by LayerSlider 7.2.1 - Multi-Purpose, Responsive, Parallax, Mobile-Friendly Slider Plugin for WordPress." />
<!-- LayerSlider updates and docs at: https://layerslider.com -->
<link rel="https://api.w.org/" href="https://www.sanctuaryphiladelphia.org/wp-json/" /><link rel="alternate" type="application/json" href="https://www.sanctuaryphiladelphia.org/wp-json/wp/v2/pages/174" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.sanctuaryphiladelphia.org/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.sanctuaryphiladelphia.org/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.9.3" />
<link rel="canonical" href="https://www.sanctuaryphiladelphia.org/" />
<link rel='shortlink' href='https://www.sanctuaryphiladelphia.org/' />
<link rel="alternate" type="application/json+oembed" href="https://www.sanctuaryphiladelphia.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.sanctuaryphiladelphia.org%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.sanctuaryphiladelphia.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.sanctuaryphiladelphia.org%2F&#038;format=xml" />
<style type='text/css'> .ae_data .elementor-editor-element-setting {
            display:none !important;
            }
            </style><style>
		</style>
		<!-- HFCM by 99 Robots - Snippet # 1: Google Ads -->
<!-- Global site tag (gtag.js) - Google Ads: 767649493 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-767649493"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-767649493');
</script>

<!-- /end HFCM by 99 Robots -->
<!-- HFCM by 99 Robots - Snippet # 3: Google Tag Manager - Header -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ557NB');</script>
<!-- End Google Tag Manager -->
<!-- /end HFCM by 99 Robots -->
<script type="text/javascript">
(function(url){
	if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
	var addEvent = function(evt, handler) {
		if (window.addEventListener) {
			document.addEventListener(evt, handler, false);
		} else if (window.attachEvent) {
			document.attachEvent('on' + evt, handler);
		}
	};
	var removeEvent = function(evt, handler) {
		if (window.removeEventListener) {
			document.removeEventListener(evt, handler, false);
		} else if (window.detachEvent) {
			document.detachEvent('on' + evt, handler);
		}
	};
	var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
	var logHuman = function() {
		if (window.wfLogHumanRan) { return; }
		window.wfLogHumanRan = true;
		var wfscr = document.createElement('script');
		wfscr.type = 'text/javascript';
		wfscr.async = true;
		wfscr.src = url + '&r=' + Math.random();
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
		for (var i = 0; i < evts.length; i++) {
			removeEvent(evts[i], logHuman);
		}
	};
	for (var i = 0; i < evts.length; i++) {
		addEvent(evts[i], logHuman);
	}
})('//www.sanctuaryphiladelphia.org/?wordfence_lh=1&hid=3420266FBDC4258240A3A1582A3A545C');
</script><meta name="bmi-version" content="1.2.1" /><style type="text/css">
	.header_top,
	.header_top_outer,
	.header_top_inner, 
	.header_top_aligner {
		height : 30px;
	}
	
	.header_mid,
	.header_mid_outer,
	.header_mid .header_mid_inner .search_wrap_inner,
	.header_mid .header_mid_inner .slogan_wrap_inner,
	.header_mid .header_mid_inner .social_wrap_inner,
	.header_mid .header_mid_inner nav > div > ul,
	.header_mid .header_mid_inner nav > div > ul > li,
	.header_mid .header_mid_inner nav > div > ul > li > a,
	.header_mid .header_mid_inner nav > div > ul > li > a > span.nav_bg_clr,
	.header_mid .header_mid_inner .logo,
	.header_mid .header_mid_inner .resp_nav_wrap_inner {
		height : 115px;
	}
	
	.header_bot,
	.header_bot_outer,
	.header_bot .header_bot_inner nav > div > ul,
	.header_bot .header_bot_inner nav > div > ul > li,
	.header_bot .header_bot_inner nav > div > ul > li > a {
		height : 45px;
	}
	
	#page.fixed_header #middle {
		padding-top : 115px;
	}
	
	#page.fixed_header.enable_header_top #middle {
		padding-top : 145px;
	}
	
	#page.fixed_header.enable_header_bottom #middle {
		padding-top : 160px;
	}
	
	#page.fixed_header.enable_header_top.enable_header_bottom #middle {
		padding-top : 190px;
	}
	
	@media only screen and (max-width: 1024px) {
		.header_top,
		.header_top_outer,
		.header_top_inner,
		.header_top_aligner,
		.header_mid,
		.header_mid_outer,
		.header_mid .header_mid_inner nav > div > ul,
		.header_mid .header_mid_inner nav > div > ul > li,
		.header_mid .header_mid_inner nav > div > ul > li > a,
		.header_mid .header_mid_inner nav > div > ul > li > a > span.nav_bg_clr,
		.header_bot,
		.header_bot_outer,
		.header_bot .header_bot_inner nav > div > ul,
		.header_bot .header_bot_inner nav > div > ul > li,
		.header_bot .header_bot_inner nav > div > ul > li > a {
			height : auto;
		}
		
		#page.fixed_header #middle,
		#page.fixed_header.enable_header_top #middle,
		#page.fixed_header.enable_header_bottom #middle,
		#page.fixed_header.enable_header_top.enable_header_bottom #middle {
			padding-top : 0px !important;
		}
	}
span.cmsms_post_format_img {
display: none !important;
}

header.cmsms_post_header, 
header.entry-header {
padding-left: 0px;
}

.buffer {
  margin: 5px;
}

div.support {
 display: none;
}

.attachment-post-thumbnail {
 margin-bottom: 20px;
}

div.opened-article header.cmsms_post_header {
  padding-left: 0px !important;
}
	#footer.cmsms_footer_default .footer_inner {
		min-height:400px;
	}
	
	.fixed_footer #main {
		margin-bottom:400px;
	}
</style><link rel="icon" href="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/cropped-watermark-logo-32x32.jpg" sizes="32x32" />
<link rel="icon" href="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/cropped-watermark-logo-192x192.jpg" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/cropped-watermark-logo-180x180.jpg" />
<meta name="msapplication-TileImage" content="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/cropped-watermark-logo-270x270.jpg" />
		<style type="text/css" id="wp-custom-css">
			/*
You can add your own CSS here.

Click the help icon above to learn more.
*/


/** Start Block Kit CSS: 72-3-34d2cc762876498c8f6be5405a48e6e2 **/

.envato-block__preview{overflow: visible;}

/*Kit 69 Custom Styling for buttons */
.envato-kit-69-slide-btn .elementor-button,
.envato-kit-69-cta-btn .elementor-button,
.envato-kit-69-flip-btn .elementor-button{
	border-left: 0px !important;
	border-bottom: 0px !important;
	border-right: 0px !important;
	padding: 15px 0 0 !important;
}
.envato-kit-69-slide-btn .elementor-slide-button:hover,
.envato-kit-69-cta-btn .elementor-button:hover,
.envato-kit-69-flip-btn .elementor-button:hover{
	margin-bottom: 20px;
}
.envato-kit-69-menu .elementor-nav-menu--main a:hover{
	margin-top: -7px;
	padding-top: 4px;
	border-bottom: 1px solid #FFF;
}
/* Fix menu dropdown width */
.envato-kit-69-menu .elementor-nav-menu--dropdown{
	width: 100% !important;
}

/** End Block Kit CSS: 72-3-34d2cc762876498c8f6be5405a48e6e2 **/



/** Start Block Kit CSS: 144-3-3a7d335f39a8579c20cdf02f8d462582 **/

.envato-block__preview{overflow: visible;}

/* Envato Kit 141 Custom Styles - Applied to the element under Advanced */

.elementor-headline-animation-type-drop-in .elementor-headline-dynamic-wrapper{
	text-align: center;
}
.envato-kit-141-top-0 h1,
.envato-kit-141-top-0 h2,
.envato-kit-141-top-0 h3,
.envato-kit-141-top-0 h4,
.envato-kit-141-top-0 h5,
.envato-kit-141-top-0 h6,
.envato-kit-141-top-0 p {
	margin-top: 0;
}

.envato-kit-141-newsletter-inline .elementor-field-textual.elementor-size-md {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
}

.envato-kit-141-bottom-0 p {
	margin-bottom: 0;
}

.envato-kit-141-bottom-8 .elementor-price-list .elementor-price-list-item .elementor-price-list-header {
	margin-bottom: .5rem;
}

.envato-kit-141.elementor-widget-testimonial-carousel.elementor-pagination-type-bullets .swiper-container {
	padding-bottom: 52px;
}

.envato-kit-141-display-inline {
	display: inline-block;
}

.envato-kit-141 .elementor-slick-slider ul.slick-dots {
	bottom: -40px;
}

/** End Block Kit CSS: 144-3-3a7d335f39a8579c20cdf02f8d462582 **/



/** Start Block Kit CSS: 71-3-d415519effd9e11f35d2438c58ea7ebf **/

.envato-block__preview{overflow: visible;}

/** End Block Kit CSS: 71-3-d415519effd9e11f35d2438c58ea7ebf **/



/** Start Block Kit CSS: 141-3-1d55f1e76be9fb1a8d9de88accbe962f **/

.envato-kit-138-bracket .elementor-widget-container > *:before{
	content:"[";
	color:#ffab00;
	display:inline-block;
	margin-right:4px;
	line-height:1em;
	position:relative;
	top:-1px;
}

.envato-kit-138-bracket .elementor-widget-container > *:after{
	content:"]";
	color:#ffab00;
	display:inline-block;
	margin-left:4px;
	line-height:1em;
	position:relative;
	top:-1px;
}

/** End Block Kit CSS: 141-3-1d55f1e76be9fb1a8d9de88accbe962f **/



/** Start Block Kit CSS: 69-3-4f8cfb8a1a68ec007f2be7a02bdeadd9 **/

.envato-kit-66-menu .e--pointer-framed .elementor-item:before{
	border-radius:1px;
}

.envato-kit-66-subscription-form .elementor-form-fields-wrapper{
	position:relative;
}

.envato-kit-66-subscription-form .elementor-form-fields-wrapper .elementor-field-type-submit{
	position:static;
}

.envato-kit-66-subscription-form .elementor-form-fields-wrapper .elementor-field-type-submit button{
	position: absolute;
    top: 50%;
    right: 6px;
    transform: translate(0, -50%);
		-moz-transform: translate(0, -50%);
		-webmit-transform: translate(0, -50%);
}

.envato-kit-66-testi-slider .elementor-testimonial__footer{
	margin-top: -60px !important;
	z-index: 99;
  position: relative;
}

.envato-kit-66-featured-slider .elementor-slides .slick-prev{
	width:50px;
	height:50px;
	background-color:#ffffff !important;
	transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-webkit-transform:rotate(45deg);
	left:-25px !important;
	-webkit-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
	-moz-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
	box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
}

.envato-kit-66-featured-slider .elementor-slides .slick-prev:before{
	display:block;
	margin-top:0px;
	margin-left:0px;
	transform:rotate(-45deg);
	-moz-transform:rotate(-45deg);
	-webkit-transform:rotate(-45deg);
}

.envato-kit-66-featured-slider .elementor-slides .slick-next{
	width:50px;
	height:50px;
	background-color:#ffffff !important;
	transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-webkit-transform:rotate(45deg);
	right:-25px !important;
	-webkit-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
	-moz-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
	box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.32);
}

.envato-kit-66-featured-slider .elementor-slides .slick-next:before{
	display:block;
	margin-top:-5px;
	margin-right:-5px;
	transform:rotate(-45deg);
	-moz-transform:rotate(-45deg);
	-webkit-transform:rotate(-45deg);
}

.envato-kit-66-orangetext{
	color:#f4511e;
}

.envato-kit-66-countdown .elementor-countdown-label{
	display:inline-block !important;
	border:2px solid rgba(255,255,255,0.2);
	padding:9px 20px;
}

/** End Block Kit CSS: 69-3-4f8cfb8a1a68ec007f2be7a02bdeadd9 **/



/** Start Block Kit CSS: 143-3-7969bb877702491bc5ca272e536ada9d **/

.envato-block__preview{overflow: visible;}
/* Material Button Click Effect */
.envato-kit-140-material-hit .menu-item a,
.envato-kit-140-material-button .elementor-button{
  background-position: center;
  transition: background 0.8s;
}
.envato-kit-140-material-hit .menu-item a:hover,
.envato-kit-140-material-button .elementor-button:hover{
  background: radial-gradient(circle, transparent 1%, #fff 1%) center/15000%;
}
.envato-kit-140-material-hit .menu-item a:active,
.envato-kit-140-material-button .elementor-button:active{
  background-color: #FFF;
  background-size: 100%;
  transition: background 0s;
}

/* Field Shadow */
.envato-kit-140-big-shadow-form .elementor-field-textual{
	box-shadow: 0 20px 30px rgba(0,0,0, .05);
}

/* FAQ */
.envato-kit-140-faq .elementor-accordion .elementor-accordion-item{
	border-width: 0 0 1px !important;
}

/* Scrollable Columns */
.envato-kit-140-scrollable{
	 height: 100%;
   overflow: auto;
   overflow-x: hidden;
}

/* ImageBox: No Space */
.envato-kit-140-imagebox-nospace:hover{
	transform: scale(1.1);
	transition: all 0.3s;
}
.envato-kit-140-imagebox-nospace figure{
	line-height: 0;
}

.envato-kit-140-slide .elementor-slide-content{
	background: #FFF;
	margin-left: -60px;
	padding: 1em;
}
.envato-kit-140-carousel .slick-active:not(.slick-current)  img{
	padding: 20px !important;
	transition: all .9s;
}

/** End Block Kit CSS: 143-3-7969bb877702491bc5ca272e536ada9d **/



/** Start Block Kit CSS: 142-3-a175df65179b9ef6a5ca9f1b2c0202b9 **/

.envato-block__preview{
	overflow: visible;
}

/* Border Radius */
.envato-kit-139-accordion .elementor-widget-container{
	border-radius: 10px !important;
}
.envato-kit-139-map iframe,
.envato-kit-139-slider .slick-slide,
.envato-kit-139-flipbox .elementor-flip-box div{
		border-radius: 10px !important;

}


/** End Block Kit CSS: 142-3-a175df65179b9ef6a5ca9f1b2c0202b9 **/



/** Start Block Kit CSS: 105-3-0fb64e69c49a8e10692d28840c54ef95 **/

.envato-kit-102-phone-overlay {
	position: absolute !important;
	display: block !important;
	top: 0%;
	left: 0%;
	right: 0%;
	margin: auto;
	z-index: 1;
}

/** End Block Kit CSS: 105-3-0fb64e69c49a8e10692d28840c54ef95 **/



/** Start Block Kit CSS: 136-3-fc37602abad173a9d9d95d89bbe6bb80 **/

.envato-block__preview{overflow: visible !important;}

/** End Block Kit CSS: 136-3-fc37602abad173a9d9d95d89bbe6bb80 **/



/** Start Block Kit CSS: 33-3-f2d4515681d0cdeb2a000d0405e47669 **/

.envato-kit-30-phone-overlay {
	position: absolute !important;
	display: block !important;
	top: 0%;
	left: 0%;
	right: 0%;
	margin: auto;
	z-index: 1;
}
.envato-kit-30-div-rotate{
	transform: rotate(90deg);
}

/** End Block Kit CSS: 33-3-f2d4515681d0cdeb2a000d0405e47669 **/



/** Start Block Kit CSS: 135-3-c665d4805631b9a8bf464e65129b2f58 **/

.envato-block__preview{overflow: visible;}

/** End Block Kit CSS: 135-3-c665d4805631b9a8bf464e65129b2f58 **/

		</style>
		</head>
<body class="home page-template-default page page-id-174 wp-custom-logo elementor-default elementor-kit-3446">
	
<!-- _________________________ Start Page _________________________ -->
<section id="page" class="chrome_only cmsms_liquid enable_header_bottom hfeed site">


<!-- _________________________ Start Main _________________________ -->
<div id="main">
	
<!-- _________________________ Start Header _________________________ -->
<header id="header">
		<div class="header_mid" data-height="115">
		<div class="header_mid_outer">
			<div class="header_mid_inner">
						
			<div class="logo_wrap">
<style type="text/css">
	.header_mid .header_mid_inner .logo_wrap {
		width : 241px;
	}
</style>
<a href="https://www.sanctuaryphiladelphia.org/" title="New Sanctuary Movement of Philadelphia" class="logo">
	<img src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/logo.png" alt="New Sanctuary Movement of Philadelphia" />
<style type="text/css">
	.header_mid_inner .logo .logo_retina {
		width : 299.5px;
	}
</style>
<img class="logo_retina" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/logo.png" alt="New Sanctuary Movement of Philadelphia" width="299.5" height="142.5" />
</a>
</div>
			
						</div>
		</div>
	</div>
	<div class="header_bot" data-height="45">
		<div class="header_bot_outer">
			<div class="header_bot_inner">
				<div class="resp_nav_wrap">
					<div class="resp_nav_wrap_inner">
						<div class="resp_nav_content">
							<a class="responsive_nav cmsms-icon-menu-2" href="javascript:void(0);"></a>
						</div>
					</div>
				</div>
				
				<!-- _________________________ Start Navigation _________________________ -->
				<nav role="navigation">
					<div class="menu-primary-pages-container"><ul id="navigation" class="navigation"><li id="menu-item-5243" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5243"><a href="https://www.sanctuaryphiladelphia.org/who-we-are-2/"><span>WHO WE ARE</span></a>
<ul class="sub-menu">
	<li id="menu-item-5244" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5244"><a href="https://www.sanctuaryphiladelphia.org/our-board/"><span>OUR BOARD</span></a></li>
</ul>
</li>
<li id="menu-item-144" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-144"><a href="https://www.sanctuaryphiladelphia.org/campaigns/"><span>Campaigns</span></a>
<ul class="sub-menu">
	<li id="menu-item-158" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-158"><a href="#"><span>Current Campaigns</span></a>
	<ul class="sub-menu">
		<li id="menu-item-3050" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3050"><a href="https://www.sanctuaryphiladelphia.org/campaigns/pa-immigrant-covid-relief-fund/"><span>PHL Immigrant COVID Relief Fund</span></a></li>
		<li id="menu-item-157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157"><a href="https://www.sanctuaryphiladelphia.org/campaigns/drivers-licenses-for-all/"><span>Driver&#8217;s Licenses For All</span></a></li>
		<li id="menu-item-2580" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2580"><a href="https://www.sanctuaryphiladelphia.org/campaigns/community-fund/"><span>Community Fund for Families in Deportation</span></a></li>
		<li id="menu-item-2659" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2659"><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-carmela-libre/"><span>Sanctuary VICTORY: Carmela Libre</span></a></li>
		<li id="menu-item-2562" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2562"><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-oneita-clive-and-supaya/"><span>Sanctuary VICTORY: The Thompson Family</span></a></li>
		<li id="menu-item-1338" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1338"><a href="https://www.sanctuaryphiladelphia.org/campaigns/defending-ppd-ice-separation/"><span>Defending ICE Hold Victory</span></a></li>
	</ul>
</li>
	<li id="menu-item-159" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-159"><a href="#"><span>Past Campaigns</span></a>
	<ul class="sub-menu">
		<li id="menu-item-2838" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2838"><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-suyapa-and-children/"><span>Sanctuary VICTORY: Suyapa and children</span></a></li>
		<li id="menu-item-153" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"><a href="https://www.sanctuaryphiladelphia.org/campaigns/ice-raids/"><span>Sanctuary in the Streets</span></a></li>
		<li id="menu-item-2035" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2035"><a href="https://www.sanctuaryphiladelphia.org/campaigns/live-stop-discriminatory-car-towing/"><span>Live Stop: Discriminatory  Car Towing</span></a></li>
		<li id="menu-item-155" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a href="https://www.sanctuaryphiladelphia.org/campaigns/against-ice-holds/"><span>Stopping Police/ICE Collaboration (ICE Holds)</span></a></li>
		<li id="menu-item-156" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156"><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-2014/"><span>Sanctuary: Angela Navarro Civil Disobedience</span></a></li>
		<li id="menu-item-154" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-154"><a href="https://www.sanctuaryphiladelphia.org/campaigns/national-immigration-reform/"><span>National Immigration Policies</span></a></li>
	</ul>
</li>
	<li id="menu-item-1372" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1372"><a href="#"><span>Organizing Projects</span></a>
	<ul class="sub-menu">
		<li id="menu-item-2146" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2146"><a href="https://www.sanctuaryphiladelphia.org/campaigns/the-peoples-inauguration/"><span>The People’s Inauguration</span></a></li>
		<li id="menu-item-1410" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1410"><a href="https://www.sanctuaryphiladelphia.org/campaigns/video-project-kids-united-against-deportation/"><span>Videos: Kids United Against Deportation</span></a></li>
		<li id="menu-item-1449" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1449"><a href="https://www.sanctuaryphiladelphia.org/campaigns/youth-doll-project/"><span>Youth Story Doll Project</span></a></li>
		<li id="menu-item-1748" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1748"><a href="https://www.sanctuaryphiladelphia.org/campaigns/nsm-leader-speaks-alongside-pope-francis/"><span>NSM Leader Speaks Alongside Pope Francis</span></a></li>
		<li id="menu-item-1418" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1418"><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-tour-denver-tucson-phoenix/"><span>Sanctuary Tour: Denver, Tucson &#038; Phoenix</span></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-148" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-148"><a href="https://www.sanctuaryphiladelphia.org/accompaniment/"><span>Accompaniment</span></a></li>
<li id="menu-item-3406" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3406"><a href="https://www.sanctuaryphiladelphia.org/political-education/"><span>Political Education</span></a>
<ul class="sub-menu">
	<li id="menu-item-1375" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1375"><a title="Title attribute" href="https://www.sanctuaryphiladelphia.org/education/immigration-101/"><span>Inmigración 101 | Immigration 101</span></a></li>
	<li id="menu-item-1376" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1376"><a href="https://www.sanctuaryphiladelphia.org/education/know-your-rights/"><span>Know Your Rights | Conozca Sus Derechos</span></a></li>
	<li id="menu-item-2655" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2655"><a href="https://www.sanctuaryphiladelphia.org/promotores/"><span>Promotores: Leadership Development Program</span></a></li>
</ul>
</li>
<li id="menu-item-1755" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1755"><a href="https://www.sanctuaryphiladelphia.org/media/press/"><span>Press</span></a></li>
<li id="menu-item-1285" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1285"><a href="https://sanctuaryphiladelphia.ourpowerbase.net/civicrm/contribute/transact?reset=1&#038;id=2"><span>Donate</span></a></li>
</ul></div>
					<div class="cl"></div>
				</nav>
				<!-- _________________________ Finish Navigation _________________________ -->
				
			</div>
		</div>
	</div>
</header>
<!-- _________________________ Finish Header _________________________ -->

	
<!-- _________________________ Start Middle _________________________ -->
<section id="middle">
<div class="middle_inner">
<section class="content_wrap fullwidth">

<!--_________________________ Start Content _________________________ -->
<div class="middle_content entry" role="main">
	<style type="text/css"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>/*! elementor - v3.6.5 - 27-04-2022 */<br />.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px} 
#cmsms_row_628b8a50d79e7 .cmsms_row_outer_parent { 
	padding-top: 10px; 
} 

#cmsms_row_628b8a50d79e7 .cmsms_row_outer_parent { 
	padding-bottom: 0px; 
} 

 
#cmsms_row_628b8a50de5fc .cmsms_row_outer_parent { 
	padding-top: 0px; 
} 

#cmsms_row_628b8a50de5fc .cmsms_row_outer_parent { 
	padding-bottom: 0px; 
} 

 
#cmsms_heading_628b8a50de71e, #cmsms_heading_628b8a50de71e a { 
	text-align:center; 
	font-weight:700; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:0px; 
} 
 
#cmsms_heading_628b8a50de76f, #cmsms_heading_628b8a50de76f a { 
	text-align:center; 
	font-weight:700; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:0px; 
} 
 
#cmsms_heading_628b8a50de7b6, #cmsms_heading_628b8a50de7b6 a { 
	text-align:center; 
	font-weight:700; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:0px; 
} 
 
#cmsms_fb_628b8a50de8a8 { 
	background-color:#eaeaea; 
} 

#cmsms_fb_628b8a50de8a8 .cmsms_button:before { 
	margin-right:.5em; 
	margin-left:0; 
	vertical-align:baseline; 
} 

#cmsms_fb_628b8a50de8a8 .cmsms_button { 
	font-family:'Roboto Condensed'; 
	font-weight:100; 
	font-style:normal; 
	border-style:solid; 
	-webkit-border-radius:2; 
	-moz-border-radius:2; 
	border-radius:2; 
} 
#cmsms_fb_628b8a50de8a8 .cmsms_button:hover { 
} 
 
#cmsms_row_628b8a50de963 .cmsms_row_outer_parent { 
	padding-top: 0px; 
} 

#cmsms_row_628b8a50de963 .cmsms_row_outer_parent { 
	padding-bottom: 0px; 
} 

 
#cmsms_heading_628b8a50dea80, #cmsms_heading_628b8a50dea80 a { 
	text-align:center; 
	font-weight:700; 
	font-style:normal; 
	margin-top:10px; 
	margin-bottom:10px; 
} 
 
#cmsms_row_628b8a50deafb .cmsms_row_outer_parent { 
	padding-top: 0px; 
} 

#cmsms_row_628b8a50deafb .cmsms_row_outer_parent { 
	padding-bottom: 50px; 
} 

 
#cmsms_icon_box_628b8a50dec08 { 
	border-width:2px; 
	-webkit-border-radius:2; 
	border-radius:2; } 

#cmsms_icon_box_628b8a50dec08:before, 
#cmsms_icon_box_628b8a50dec08 .icon_box_heading:before { 
	font-size:150px; 
	line-height:150px; 
	width:150px; 
	height:150px; 
	border-width:0px; 
	-webkit-border-radius:50%; 
	border-radius:50%; 
	border-color:#ffee82; border-color:rgba(255, 238, 130, 1);
	} 

#cmsms_icon_box_628b8a50dec08 { 
	padding-top:180px; } 

#cmsms_icon_box_628b8a50dec08:before, 
#cmsms_icon_box_628b8a50dec08 .icon_box_heading:before { 
	margin-left:-75px; 
	} 

#cmsms_icon_box_628b8a50dec08.cmsms_icon_top { 
	padding-top:210px; 
	} 

#cmsms_icon_box_628b8a50dec08:before, 
#cmsms_icon_box_628b8a50dec08.cmsms_icon_heading_left .icon_box_heading:before { 
	content:''; 
	background-image:url(https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/website.jpg); 
} 
 
#cmsms_icon_box_628b8a50def0c { } 

#cmsms_icon_box_628b8a50def0c:before, 
#cmsms_icon_box_628b8a50def0c .icon_box_heading:before { 
	font-size:150px; 
	line-height:150px; 
	width:150px; 
	height:150px; 
	border-width:0px; 
	-webkit-border-radius:50%; 
	border-radius:50%; 
	} 

#cmsms_icon_box_628b8a50def0c { 
	padding-top:180px; } 

#cmsms_icon_box_628b8a50def0c:before, 
#cmsms_icon_box_628b8a50def0c .icon_box_heading:before { 
	margin-left:-75px; 
	} 

#cmsms_icon_box_628b8a50def0c.cmsms_icon_top { 
	padding-top:210px; 
	} 

#cmsms_icon_box_628b8a50def0c:before, 
#cmsms_icon_box_628b8a50def0c.cmsms_icon_heading_left .icon_box_heading:before { 
	content:''; 
	background-image:url(https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/Shared_Worship_edited_pic-e1455897372793.jpg); 
} 
 
#cmsms_icon_box_628b8a50df1f8 { } 

#cmsms_icon_box_628b8a50df1f8:before, 
#cmsms_icon_box_628b8a50df1f8 .icon_box_heading:before { 
	font-size:150px; 
	line-height:150px; 
	width:150px; 
	height:150px; 
	border-width:0px; 
	-webkit-border-radius:50%; 
	border-radius:50%; 
	} 

#cmsms_icon_box_628b8a50df1f8 { 
	padding-top:180px; } 

#cmsms_icon_box_628b8a50df1f8:before, 
#cmsms_icon_box_628b8a50df1f8 .icon_box_heading:before { 
	margin-left:-75px; 
	} 

#cmsms_icon_box_628b8a50df1f8.cmsms_icon_top { 
	padding-top:210px; 
	} 

#cmsms_icon_box_628b8a50df1f8:before, 
#cmsms_icon_box_628b8a50df1f8.cmsms_icon_heading_left .icon_box_heading:before { 
	content:''; 
	background-image:url(https://www.sanctuaryphiladelphia.org/wp-content/uploads/2016/02/1557279_439347486203410_2933239153549133297_o.jpg); 
} 
 
#cmsms_row_628b8a50df4ad { 
	background-color: #ffffff; 
	background-image: url(https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/10/DSC00085-e1539008767424.jpg); 
	background-position: center center; 
	background-repeat: no-repeat; 
	background-attachment: scroll; 
	background-size: cover; 
} 

#cmsms_row_628b8a50df4ad .cmsms_row_outer_parent { 
	padding-top: 75px; 
} 

#cmsms_row_628b8a50df4ad .cmsms_row_outer_parent { 
	padding-bottom: 75px; 
} 

#cmsms_row_628b8a50df4ad .cmsms_row_overlay { 
	background-color: #84161a; 
	opacity: 0.6; 
} 

 
#cmsms_heading_628b8a50df806, #cmsms_heading_628b8a50df806 a { 
	color:#ffffff; color:rgba(255, 255, 255, 1);
	text-align:center; 
	font-weight:500; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:20px; 
} 
 
#cmsms_row_628b8a50dfa1b .cmsms_row_outer_parent { 
	padding-top: 0px; 
} 

#cmsms_row_628b8a50dfa1b .cmsms_row_outer_parent { 
	padding-bottom: 50px; 
} 

 
#cmsms_heading_628b8a50dfaae, #cmsms_heading_628b8a50dfaae a { 
	text-align:center; 
	font-weight:500; 
	font-style:normal; 
	margin-top:50px; 
	margin-bottom:20px; 
} 
 
#cmsms_row_628b8a50dfb28 .cmsms_row_outer_parent { 
	padding-top: 0px; 
} 

#cmsms_row_628b8a50dfb28 .cmsms_row_outer_parent { 
	padding-bottom: 50px; 
} 

 
#cmsms_heading_628b8a50dfc1d, #cmsms_heading_628b8a50dfc1d a { 
	text-align:center; 
	font-weight:400; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:20px; 
} 
 
#cmsms_heading_628b8a50e150e, #cmsms_heading_628b8a50e150e a { 
	text-align:center; 
	font-weight:400; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:20px; 
} 
 
#cmsms_heading_628b8a50e3031, #cmsms_heading_628b8a50e3031 a { 
	font-weight:400; 
	font-style:normal; 
	margin-top:0px; 
	margin-bottom:20px; 
} 
 
#cmsms_row_628b8a50e470e { 
	background-image: url(https://www.sanctuaryphiladelphia.org/wp-content/uploads/2015/01/IMG_2509.jpg); 
	background-position: center center; 
	background-repeat: no-repeat; 
	background-attachment: scroll; 
	background-size: cover; 
} 

#cmsms_row_628b8a50e470e .cmsms_row_outer_parent { 
	padding-top: 100px; 
} 

#cmsms_row_628b8a50e470e .cmsms_row_outer_parent { 
	padding-bottom: 100px; 
} 

#cmsms_row_628b8a50e470e .cmsms_row_overlay { 
	background-color: #84161a; 
	opacity: 0.6; 
} 

</style>
<h2>Our website is currently under construction. If you can&#8217;t find what you are looking for please call this number 1 (215) 279 7060</h2>
<div id="cmsms_row_628b8a50d79e7" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_first">
<div class="cmsms_slider"><script type="text/javascript">jQuery(function() { _initLayerSlider( '#layerslider_1_1jndr6og64cg0', {sliderVersion: '6.11.2', type: 'fullwidth', responsiveUnder: 0, layersContainer: 0, hideUnder: 0, hideOver: 100000, pauseOnHover: 'enabled', skin: 'v5', sliderFadeInDuration: 0, globalBGColor: '#ffffff', navStartStop: false, navButtons: false, hoverBottomNav: true, showBarTimer: true, showCircleTimer: false, thumbnailNavigation: 'disabled', useSrcset: true, skinsPath: 'https://www.sanctuaryphiladelphia.org/wp-content/plugins/LayerSlider/assets/static/layerslider/skins/'}); });</script><div id="layerslider_1_1jndr6og64cg0" class="ls-wp-container fitvidsignore" style="width:1000px;height:500px;margin:0 auto;margin-bottom: 0px;"><div class="ls-slide" data-ls="bgposition:50% 0%;duration:4000;transition2d:1;kenburnsscale:1.2;"><img width="7831" height="5220" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06.jpg" class="ls-bg" alt="" srcset="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06.jpg 7831w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-300x200.jpg 300w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-768x512.jpg 768w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-1024x683.jpg 1024w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-580x387.jpg 580w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-820x547.jpg 820w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2020/03/NSM06-1160x773.jpg 1160w" sizes="(max-width: 7831px) 100vw, 7831px" /><a style="" class="ls-l" href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-suyapa-and-children/" target="_self" data-ls="offsetxin:80;offsetxout:-80;durationout:400;parallaxlevel:0;"><div style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;font-family:Roboto Condensed;font-size:40px;border-radius:2px;top:381px;left:0px;background-color:#ffffff;" class="ls-post-layer">Sanctuary: Mobilizing Faith Through Community Organizing</div></a><a href="https://www.sanctuaryphiladelphia.org/campaigns/sanctuary-suyapa-and-children/" target="_self" class="ls-link ls-link-on-top"></a></div><div class="ls-slide" data-ls="bgposition:50% 0%;duration:4000;transition2d:1;kenburnsscale:1.2;"><img width="3990" height="2555" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha.jpg" class="ls-bg" alt="Bertha, one of the Promotores of New Sanctuary Movement of Philadelphia" srcset="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha.jpg 3990w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-300x192.jpg 300w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-768x492.jpg 768w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-1024x656.jpg 1024w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-580x371.jpg 580w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-820x525.jpg 820w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2019/03/Bertha-1160x743.jpg 1160w" sizes="(max-width: 3990px) 100vw, 3990px" /><a style="" class="ls-l" href="https://www.sanctuaryphiladelphia.org/3077-2/" target="_self" data-ls="offsetxin:80;offsetxout:-80;durationout:400;parallaxlevel:0;"><div style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;font-family:Roboto Condensed;font-size:40px;border-radius:2px;top:381px;left:0px;background-color:#ffffff;" class="ls-post-layer">Promotores: Developing Leaders, Building Power</div></a><a href="https://www.sanctuaryphiladelphia.org/promotores/" target="_self" class="ls-link ls-link-on-top"></a></div><div class="ls-slide" data-ls="duration:4000;transition2d:1;kenburnsscale:1.2;"><img width="1070" height="664" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520.jpg" class="ls-bg" alt="" srcset="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520.jpg 1070w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520-300x186.jpg 300w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520-768x477.jpg 768w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520-1024x635.jpg 1024w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520-580x360.jpg 580w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/12/Miguel-edited--e1544629739520-820x509.jpg 820w" sizes="(max-width: 1070px) 100vw, 1070px" /><a style="" class="ls-l" href="https://www.sanctuaryphiladelphia.org/support-nsm-bold-organizing/" target="_self" data-ls="offsetxin:80;offsetxout:-80;durationout:400;parallaxlevel:0;"><div style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;font-family:Roboto Condensed;font-size:40px;border-radius:2px;top:381px;left:1px;background-color:#ffffff;" class="ls-post-layer">The Community Fund: Fighting for Families in Deportation</div></a><a href="https://www.sanctuaryphiladelphia.org/campaigns/community-fund/" target="_self" class="ls-link ls-link-on-top"></a></div><div class="ls-slide" data-ls="bgposition:50% 0%;duration:4000;transition2d:1;kenburnsscale:1.2;"><img width="2048" height="1365" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo.jpg" class="ls-bg" alt="" srcset="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo.jpg 2048w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-300x200.jpg 300w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-768x512.jpg 768w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-1024x683.jpg 1024w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-580x387.jpg 580w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-820x547.jpg 820w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/24church-sanctuary-superJumbo-1160x773.jpg 1160w" sizes="(max-width: 2048px) 100vw, 2048px" /><a style="" class="ls-l" href="https://www.sanctuaryphiladelphia.org/support-nsm-bold-organizing/" target="_self" data-ls="offsetxin:80;offsetxout:-80;durationout:400;parallaxlevel:0;"><div style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;font-family:Roboto Condensed;font-size:40px;border-radius:2px;top:381px;left:0px;background-color:#ffffff;" class="ls-post-layer">Grassroots Organizing: Dignity &amp; Justice For All Immigrants</div></a><a href="https://www.sanctuaryphiladelphia.org/campaigns/community-fund/" target="_self" class="ls-link ls-link-on-top"></a></div></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50de50d" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_first">
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50de5fc" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
</p>
<p><div class="cmsms_column one_fourth">
<h2 id="cmsms_heading_628b8a50de71e" class="cmsms_heading">Interfaith</h2><h2 id="cmsms_heading_628b8a50de76f" class="cmsms_heading">Immigrant</h2><h2 id="cmsms_heading_628b8a50de7b6" class="cmsms_heading">Justice</h2>
</div>
<div class="cmsms_column three_fourth">
<div id="cmsms_fb_628b8a50de8a8" class="cmsms_featured_block featured_block_with_button">
<div class="featured_block_inner">
<div class="featured_block_text">
</div>
<div class="featured_block_button_wrap">
<a href="https://sanctuaryphiladelphia.ourpowerbase.net/civicrm/contribute/transact?reset=1&#038;id=2" class="featured_block_button cmsms_button"><span>DONATE</span></a>
</div>
</div>
</div>
<p>We work to end injustices against immigrants regardless of immigration status, express radical welcome for all, and ensure that values of dignity, justice, and hospitality are lived out in practice and upheld in the policy.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50de963" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_first">
<h2 id="cmsms_heading_628b8a50dea80" class="cmsms_heading">NSM’s definition of immigrant justice</h2><div class="cmsms_text">
</div>
<p>Immigrant justice is a process that begins by confronting the reality that the immigration system is not broken, but works as designed–to keep white people in power and hoard resources by denying the humanity of Black and Brown people and treating them as less than human. Created out of white supremacy violence, it is designed to harm individuals, families, neighborhoods, and communities. Drawing from our faith traditions gives us a vision where all people can live free and safe in the community of their choice with access to the resources they need in order to flourish.  NSM’s immigrant justice work supports its members to discover and build their power within to connect with others to transform oppressive systems into ones of liberation..</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50deafb" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_third">

<div id="cmsms_icon_box_628b8a50dec08" class="cmsms_icon_box cmsms_icon_top box_icon_type_image ">
<div class="icon_box_inner">
<h3 class="icon_box_heading">Immigrant-led</h3>
<div class="icon_box_text">
<p>
Affected immigrants decide our goals and plan our strategy. Citizen allies support and accompany immigrants in the struggle.</p>
</div>
</div>
</div>
</div>
<div class="cmsms_column one_third">

<div id="cmsms_icon_box_628b8a50def0c" class="cmsms_icon_box cmsms_icon_top box_icon_type_image ">
<div class="icon_box_inner">
<h3 class="icon_box_heading">Interfaith</h3>
<div class="icon_box_text">
<p>
We organize member congregations from diverse faith backgrounds who come together around shared faith values.</p>
</div>
</div>
</div>
</div>
<div class="cmsms_column one_third">

<div id="cmsms_icon_box_628b8a50df1f8" class="cmsms_icon_box cmsms_icon_top box_icon_type_image ">
<div class="icon_box_inner">
<h3 class="icon_box_heading">Spiritual Non-violence</h3>
<div class="icon_box_text">
<p>
Inspired by peaceful movements for social change, we confront violent structures with bold compassion and courageous love.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50df4ad" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_overlay"></div>
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_first" data-animation="slideInLeft">
<div class="cmsms_text">
</div>
<h2 id="cmsms_heading_628b8a50df806" class="cmsms_heading">Recent Achievements</h2><div class="cmsms_tabs tabs_mode_tour tabs_pos_left">
<ul class="cmsms_tabs_list">
<li id="cmsms_tabs_list_item_628b8a50df8b6" class="cmsms_tabs_list_item current_tab">
<a href="#" class="cmsms-icon-police">
<span>Ended All Police - ICE Collaboration in Philadelphia</span>
</a>
</li><li id="cmsms_tabs_list_item_628b8a50df91a" class="cmsms_tabs_list_item">
<a href="#" class="cmsms-icon-award">
<span>Won Thompson Family Sanctuary Campaign</span>
</a>
</li><li id="cmsms_tabs_list_item_628b8a50df972" class="cmsms_tabs_list_item">
<a href="#" class="cmsms-icon-award">
<span>Won Suyapa Reyes &amp; her kids′ Sanctuary Campaign</span>
</a>
</li></ul>
<div class="cmsms_tabs_wrap">
<div id="cmsms_tab_628b8a50df8b6" class="cmsms_tab active_tab">
<div class="cmsms_tab_inner">
<p>
As part of the Philadelphia Family Unity Network coalition, New Sanctuary Movement successfully ended collaboration between all Philadelphia city officials and Immigration and Customs Enforcement (ICE), the deportation wing of the federal government. Thanks to our hard-won victory, countless immigrant families in Philadelphia remain together and are safer from deportation.</p>
</div>
</div><div id="cmsms_tab_628b8a50df91a" class="cmsms_tab">
<div class="cmsms_tab_inner">
<p>
After 843 days of resisting unjust, racist immigration laws and fighting to keep their family together, the Thompsons win their Sanctuary campaign! Since fleeing Jamaica in 2004 after their farm was burned and they received death threats, the family has been pursuing peace and safety. Now, the family is finally able to walk free.</p>
</div>
</div><div id="cmsms_tab_628b8a50df972" class="cmsms_tab">
<div class="cmsms_tab_inner">
<p>
After 554 in Sanctuary, Suyapa Reyes and her children have won their campaign and are free to leave Sanctuary!</p>
</div>
</div></div>
</div><div class="cmsms_text">
<p></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50dfa1b" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_first">
<h2 id="cmsms_heading_628b8a50dfaae" class="cmsms_heading">Campaign Activity</h2><div class="cmsms_text">
<p style="text-align: center;">We organize immigrants and allies to create justice for all, regardless of immigration status.<br />
Check out our latest campaign actions below and read about our organizing model here.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50dfb28" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_third">
<h4 id="cmsms_heading_628b8a50dfc1d" class="cmsms_heading">Community Fund</h4><br />
<div class="cmsms_wrap_blog entry-summary" id="blog_628b8a50dfc7c"><div class="blog standard">
<!--_________________________ Start Standard Article _________________________ -->

<article id="post-3259" class="cmsms_default_type post-3259 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-community-fund">
	<div class="cmsms_post_info entry-meta">
		<span class="cmsms_post_format_img  cmsms-icon-monitor"></span>
		
			</div>
	<div class="cmsms_post_cont">
	<figure><a href="https://www.sanctuaryphiladelphia.org/feeding-freedom-fundraiser/" title="Feeding Freedom Fundraiser" class="cmsms_img_link preloader"><img width="820" height="490" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/01/IMG_1966-820x490.jpg" class="full-width wp-post-image" alt="Feeding Freedom Fundraiser" title="Feeding Freedom Fundraiser" /></a></figure><header class="cmsms_post_header entry-header"><h1 class="cmsms_post_title entry-title"><a href="https://www.sanctuaryphiladelphia.org/feeding-freedom-fundraiser/">Feeding Freedom Fundraiser</a></h1></header><div class="cmsms_post_content entry-content">
</div>
<footer class="cmsms_post_footer entry-meta"><a class="button cmsms_post_read_more" href="https://www.sanctuaryphiladelphia.org/feeding-freedom-fundraiser/">Read More</a></footer>	</div>
</article>
<!--_________________________ Finish Standard Article _________________________ -->

</div></div>
</div>
<div class="cmsms_column one_third">
<h4 id="cmsms_heading_628b8a50e150e" class="cmsms_heading">Driver&#8217;s Licenses for All in PA</h4><br />
<div class="cmsms_wrap_blog entry-summary" id="blog_628b8a50e155a"><div class="blog standard">
<!--_________________________ Start Standard Article _________________________ -->

<article id="post-3322" class="cmsms_default_type post-3322 post type-post status-publish format-standard has-post-thumbnail hentry category-drivers-licenses">
	<div class="cmsms_post_info entry-meta">
		<span class="cmsms_post_format_img  cmsms-icon-monitor"></span>
		
			</div>
	<div class="cmsms_post_cont">
	<figure><a href="https://www.sanctuaryphiladelphia.org/drivers-licenses-for-all-updates-2020-2021/" title="Driver&#8217;s Licenses For All Updates: 2020-2021" class="cmsms_img_link preloader"><img width="696" height="452" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/08/Los-ninos-alzan-su-voz-PORTADA-696x452.jpg" class="full-width wp-post-image" alt="Driver&#8217;s Licenses For All Updates: 2020-2021" loading="lazy" title="Driver&#8217;s Licenses For All Updates: 2020-2021" srcset="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/08/Los-ninos-alzan-su-voz-PORTADA-696x452.jpg 696w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/08/Los-ninos-alzan-su-voz-PORTADA-696x452-300x195.jpg 300w, https://www.sanctuaryphiladelphia.org/wp-content/uploads/2021/08/Los-ninos-alzan-su-voz-PORTADA-696x452-580x377.jpg 580w" sizes="(max-width: 696px) 100vw, 696px" /></a></figure><header class="cmsms_post_header entry-header"><h1 class="cmsms_post_title entry-title"><a href="https://www.sanctuaryphiladelphia.org/drivers-licenses-for-all-updates-2020-2021/">Driver&#8217;s Licenses For All Updates: 2020-2021</a></h1></header><div class="cmsms_post_content entry-content">
<p>NSM is one of the leading organizations working to pass legislation to allow everyone in PA to have a Driver&#8217;s...</p>
</div>
<footer class="cmsms_post_footer entry-meta"><a class="button cmsms_post_read_more" href="https://www.sanctuaryphiladelphia.org/drivers-licenses-for-all-updates-2020-2021/">Read More</a></footer>	</div>
</article>
<!--_________________________ Finish Standard Article _________________________ -->

</div></div>
</div>
<div class="cmsms_column one_third">
<h4 id="cmsms_heading_628b8a50e3031" class="cmsms_heading">Defending Sanctuary Cities</h4><br />
<div class="cmsms_wrap_blog entry-summary" id="blog_628b8a50e307b"><div class="blog standard">
<!--_________________________ Start Standard Article _________________________ -->

<article id="post-2576" class="cmsms_default_type post-2576 post type-post status-publish format-standard has-post-thumbnail hentry category-defending-ppd-ice-separation">
	<div class="cmsms_post_info entry-meta">
		<span class="cmsms_post_format_img  cmsms-icon-monitor"></span>
		
			</div>
	<div class="cmsms_post_cont">
	<figure><a href="https://www.sanctuaryphiladelphia.org/victory-against-ice-database/" title="Victory Against ICE Database!" class="cmsms_img_link preloader"><img width="820" height="427" src="https://www.sanctuaryphiladelphia.org/wp-content/uploads/2018/05/Screen-Shot-2018-05-29-at-12.49.51-PM-820x427.png" class="full-width wp-post-image" alt="Victory Against ICE Database!" loading="lazy" title="Victory Against ICE Database!" /></a></figure><header class="cmsms_post_header entry-header"><h1 class="cmsms_post_title entry-title"><a href="https://www.sanctuaryphiladelphia.org/victory-against-ice-database/">Victory Against ICE Database!</a></h1></header><div class="cmsms_post_content entry-content">
<p>After a long and hard -fought campaign working as a team with organizations and the city, on July 27th 2018...</p>
</div>
<footer class="cmsms_post_footer entry-meta"><a class="button cmsms_post_read_more" href="https://www.sanctuaryphiladelphia.org/victory-against-ice-database/">Read More</a></footer>	</div>
</article>
<!--_________________________ Finish Standard Article _________________________ -->

</div></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="cmsms_row_628b8a50e470e" class="cmsms_row cmsms_color_scheme_default">
<div class="cmsms_row_outer_parent">
<div class="cmsms_row_overlay"></div>
<div class="cmsms_row_outer">
<div class="cmsms_row_inner">
<div class="cmsms_row_margin">
<div class="cmsms_column one_third">
</div>
<div class="cmsms_column one_third">
<div class="cmsms_text">
<h3 style="text-align: center;">Stay updated! Join the mailing list</h3>
</div>
<br />
<div class="cmsms_contact_form"><div role="form" class="wpcf7" id="wpcf7-f2092-p174-o1" lang="en-US" dir="ltr">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/#wpcf7-f2092-p174-o1" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="2092" />
<input type="hidden" name="_wpcf7_version" value="5.5.6.1" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2092-p174-o1" />
<input type="hidden" name="_wpcf7_container_post" value="174" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</div>
<p><span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="Your Name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span></p>
<p><span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="Your Email" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span></p>
<p><input type="submit" value="Subscribe" class="wpcf7-form-control has-spinner wpcf7-submit" /></p>
<input type="hidden" name="preferred-language" value="English" class="wpcf7-form-control wpcf7-hidden" />
<div class="wpcf7-response-output" aria-hidden="true"></div></form></div></div>
</div>
<div class="cmsms_column one_third">
</div>
</div>
</div>
</div>
</div>
</div>

<div class="cl"></div></div>
<!-- _________________________ Finish Content _________________________ -->

</section>
</div>
</section>
<!-- _________________________ Finish Middle _________________________ -->


<a href="javascript:void(0);" id="slide_top" class="cmsms-icon-up-open-mini"></a>
</div>
<!-- _________________________ Finish Main _________________________ -->

<!-- _________________________ Start Footer _________________________ -->
	<footer id="footer" role="contentinfo" class="cmsms_color_scheme_footer cmsms_footer_small">
		<div class="footer_bg">
			<div class="footer_inner">
		<div class="social_wrap">
<div class="social_wrap_inner">
<ul>
<li>
	<a href="https://www.facebook.com/New.Sanctuary.Movement.of.Philadelphia" class="cmsms-icon-facebook-circled-2" title="Facebook" target="_blank"></a>
</li>
<li>
	<a href="https://twitter.com/nsmphilly" class="cmsms-icon-twitter-circled-2" title="Twitter" target="_blank"></a>
</li>
<li>
	<a href="https://www.youtube.com/channel/UCPaAXiO8aGZLir56zTuD7Ew" class="cmsms-icon-play-circled" title="Youtube" target="_blank"></a>
</li>
<li>
	<a href="https://www.instagram.com/sanctuary_philadelphia" class="cmsms-icon-instagramm" title="" target="_blank"></a>
</li>
</ul>
</div>
</div>
<span class="copyright">Photos by Aidan Un, Bambang Tribuwono, Harvey Finkle, Tim Moyer, and NSM staff | <a href="https://www.thedigitalnonprofit.com">Website by The Digital Nonprofit</a></span>
			</div>
		</div>
	</footer>
<!-- _________________________ Finish Footer _________________________ -->

</section>
<!-- _________________________ Finish Page _________________________ -->

<!-- HFCM by 99 Robots - Snippet # 4: Google Tag Manager - Footer -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZ557NB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- /end HFCM by 99 Robots -->

<script type='text/javascript'>
/* <![CDATA[ */
r3f5x9JS=escape(document['referrer']);
hf4N='ccd699c90bb77fddd87242112a7e2a39';
hf4V='12735b92234ee3d58fbb117ca7bc437a';
jQuery(document).ready(function($){var e="#commentform, .comment-respond form, .comment-form, #lostpasswordform, #registerform, #loginform, #login_form, #wpss_contact_form, .wpcf7-form";$(e).submit(function(){$("<input>").attr("type","hidden").attr("name","r3f5x9JS").attr("value",r3f5x9JS).appendTo(e);return true;});var h="form[method='post']";$(h).submit(function(){$("<input>").attr("type","hidden").attr("name",hf4N).attr("value",hf4V).appendTo(h);return true;});});
/* ]]> */
</script> 
<link rel='stylesheet' id='cmsms-google-fonts-roboto-condensed-css'  href='//fonts.googleapis.com/css?family=Roboto+Condensed%3A400%2C400italic%2C700%2C700italic&#038;ver=5.9.3' type='text/css' media='all' />
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-includes/js/comment-reply.min.js?ver=5.9.3' id='comment-reply-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"https:\/\/www.sanctuaryphiladelphia.org\/wp-json\/","namespace":"contact-form-7\/v1"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.5.6.1' id='contact-form-7-js'></script>
<script type='text/javascript' id='wpcf7-ga-events-js-before'>
var cf7GASendActions = {"invalid":"true","spam":"true","mail_sent":"true","mail_failed":"true","sent":"false"}, cf7FormIDs = {"ID_2092":"General Mailchimp Subscribe form","ID_1272":"Get Involved Sign-up","ID_1132":"Accomp't Sign-up","ID_76":"Congregation Form"}
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/cf7-google-analytics/js/cf7-google-analytics.min.js?ver=1.8.7' id='wpcf7-ga-events-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/js/jquery.meanmenu.js?ver=5.9.3' id='progress_wp_br-home-js-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/js/wow.min.js?ver=5.9.3' id='pb_wp_wow-min-js-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/js/jquery.scrollUp.min.js?ver=5.9.3' id='pbwp_scroll-js-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/js/waypoints.min.js?ver=5.9.3' id='pbwp_way-min-js-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/progress-bar-wp/assets/js/main.js?ver=5.9.3' id='pbwp_main-min-js-js'></script>
<script type='text/javascript' id='cb70d11b8-js-extra'>
/* <![CDATA[ */
var localize = {"ajaxurl":"https:\/\/www.sanctuaryphiladelphia.org\/wp-admin\/admin-ajax.php","nonce":"dfd47a5c46","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"page_permalink":"https:\/\/www.sanctuaryphiladelphia.org\/"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/uploads/essential-addons-elementor/734e5f942.min.js?ver=1653312080' id='cb70d11b8-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/js/jqueryLibraries.min.js?ver=1.0.0' id='jLibs-js'></script>
<script type='text/javascript' id='script-js-extra'>
/* <![CDATA[ */
var cmsms_script = {"theme_url":"https:\/\/www.sanctuaryphiladelphia.org\/wp-content\/themes\/social-activity","site_url":"https:\/\/www.sanctuaryphiladelphia.org\/","ilightbox_skin":"dark","ilightbox_path":"vertical","ilightbox_infinite":"0","ilightbox_aspect_ratio":"1","ilightbox_mobile_optimizer":"1","ilightbox_max_scale":"1","ilightbox_min_scale":"0.2","ilightbox_inner_toolbar":"0","ilightbox_smart_recognition":"0","ilightbox_fullscreen_one_slide":"0","ilightbox_fullscreen_viewport":"center","ilightbox_controls_toolbar":"1","ilightbox_controls_arrows":"0","ilightbox_controls_fullscreen":"1","ilightbox_controls_thumbnail":"1","ilightbox_controls_keyboard":"1","ilightbox_controls_mousewheel":"1","ilightbox_controls_swipe":"1","ilightbox_controls_slideshow":"0","ilightbox_close_text":"Close","ilightbox_enter_fullscreen_text":"Enter Fullscreen (Shift+Enter)","ilightbox_exit_fullscreen_text":"Exit Fullscreen (Shift+Enter)","ilightbox_slideshow_text":"Slideshow","ilightbox_next_text":"Next","ilightbox_previous_text":"Previous","ilightbox_load_image_error":"An error occurred when trying to load photo.","ilightbox_load_contents_error":"An error occurred when trying to load contents.","ilightbox_missing_plugin_error":"The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin<\\\/a>."};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/js/jquery.script.js?ver=1.0.0' id='script-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/themes/social-activity/js/jquery.tweet.min.js?ver=1.3.1' id='twitter-js'></script>
<script type='text/javascript' src='https://www.sanctuaryphiladelphia.org/wp-content/plugins/wp-spamshield/js/jscripts-ftr2-min.js' id='wpss-jscripts-ftr-js'></script>
</body>
</html>
