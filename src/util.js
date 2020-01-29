import {Dimensions, Platform, PixelRatio} from 'react-native';
// Extracted Token that I recieved when I logged into www.callofduty.com
export const token =
  '_fbp=fb.1.1579326734984.1661458728; new_SiteId=cod; XSRF-TOKEN=vfG6tHgnH2UhK8VbiP7Ph_ST0DFnLBHq6Bluh6YN3plFDE6i5N33Puth_M_Cokyt; comid=cod; check=true; AMCVS_0FB367C2524450B90A490D4C%40AdobeOrg=1; ACT_SSO_LOCALE=en_US; s_cc=true; email=jordeguevara@gmail.com; agegate=1993-02-23; reg_ts=1580248518988; CRM_BLOB=eyJ2ZXIiOjEsInBsYXQiOnsicCI6eyJ2IjowLCJ0Ijp7ImJvNCI6eyJtcCI6bnVsbCwieiI6bnVsbCwicHJlcyI6MC4wLCJzcCI6MC4wLCJsZXYiOjAuMH19fX19; country=US; AMCV_0FB367C2524450B90A490D4C%40AdobeOrg=1075005958%7CMCIDTS%7C18290%7CMCMID%7C22065054508431220541842445861520793905%7CMCAAMLH-1580853321%7C9%7CMCAAMB-1580853321%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1580255721s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.1%7CMCCIDH%7C-849883399; pgacct=psn; atvi-privacy-policy-updated=true; SSO_REDIRECTED_AT_LOGIN=https://www.callofduty.com/; gpv_pn=no%20value; s_tp=1841; s_ppv=https%253A%2F%2Fprofile.callofduty.com%2Fcod%2Flogin%253FredirectUrl%253Dhttps%25253A%25252F%25252Fwww.callofduty.com%25252F%2C51%2C51%2C938; s_nr=1580249373727-Repeat; s_sq=activision.prd%3D%2526c.%2526a.%2526activitymap.%2526page%253Dhttps%25253A%25252F%25252Fprofile.callofduty.com%25252Fcod%25252Flogin%25253FredirectUrl%25253Dhttps%2525253A%2525252F%2525252Fwww.callofduty.com%2525252F%2526link%253DPLAYSTATION%2526region%253Dconsole-login%2526.activitymap%2526.a%2526.c%2526pid%253Dhttps%25253A%25252F%25252Fprofile.callofduty.com%25252Fcod%25252Flogin%25253FredirectUrl%25253Dhttps%2525253A%2525252F%2525252Fwww.callofduty.com%2525252F%2526oid%253Dhttps%25253A%25252F%25252Fprofile.callofduty.com%25252Fcod%25252FthirdPartyAuth%25252Finit%25252Fpsn%25253Fintent%25253Dlogin%252526returnURL%25253Dhttps%25253A%25252F%25252Fprofile.ca%2526ot%253DA; THIRD_PARTY_AUTH_STATE=1580249373806X0274485241705433300; utkn=eyJhbGciOiAiUlNBLU9BRVAiLCAiZW5jIjogIkExMjhDQkMtSFMyNTYiLCAia2lkIjogInVtYl8xIn0.LsvPy151riZ-YmswvzOalidNpZIY8YmOuseH4s0HWA1m2VGrKW2l6V2yRNl-9THfsaJJjoRkno2FZjCMAKdpmgn808QrandolJbQMkoiJwTtQeyJUUN7llNqxCjsbJ5aKdMfqjS2ezl9TDplgs7foF-aMfI8cumrzce8tJHXlz4.9g5sNSQDonFDnRVlR6erwA.JBLaQOmKChEhp3NX-crcLb3rM7AxEyr962SrLsBgZH6Dng-FU_lo-GCpkOBSQ77qjc7ZXpu-wkx_fC_XE0Mmtc2TNquQFoI4vNZV-_3w3X927zb0Us5lNJruRMDX3WM3X0EyE3PVquPMyr-6FonixvEdbUdHTRuA1zOe59-xfD54PrdtpT_mIVlaVjgtdSPRMQOL7vzHF51x9nKXeBB4Htop155ETr6Xow4GB-naK578c-Tw8vOlDt6QwGYoBBkQJk-PrMRbngLh0MqYKLcVMWB9ZZjVOYwXQqNGxbjTW_nvRsyZEX5bh8LRuTnDyqH16mmTYXhuHMyjyiVfOyeNWLimIeQHvf_A_LgJo4GGp7uahZeZzNwcNZl16ULb7m-dYNe2ZdCwFWmWW6mX-YCkZ4PpWCbcXNm1bKwiUu4VhCc5Xc8MVQOxkneifw2mOzujnbe4f6rwDUq06ta93IzKqObccyz8z-ge0KfbiJ7D9d23it8lQrDQaB5t6jGF0eJJW60yl55MYFfzKE_ZxPLvrtdr481F_lsGKgOup7ZlXUAsm_oRsdXx7KjPGYTwWWt5GN91PyL08h3lqWdiI1JdjMp7c-sGPZVqJ0ax8qJZdnrSaNXPb3xwNm9ZBhR45zDnLg-vP2B5Nb14VfO2o4gnvA.jai9M4EiwEgCwe_0OG2nKQ; umbrellaId=17312443969174715586; ACT_SSO_COOKIE=MTE1NzQwNTc2OTU3MTk2MTUyODA6MTU4MTQ1ODk3NjM1MjozODc1ZmY0YmI3ZTQ2MTY5YzljNDk5NDhmYzhmNThhZg; s_ACT_SSO_COOKIE=MTE1NzQwNTc2OTU3MTk2MTUyODA6MTU4MTQ1ODk3NjM1MjozODc1ZmY0YmI3ZTQ2MTY5YzljNDk5NDhmYzhmNThhZg; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.Zj7sT2V0PCS-BTbYeknu0zOp7MTQM5uQG381w6jWBboGDw5rTJZemw.BtYIjT0AtHxjD6Xl.PvTVWlC7LJMYa0v1NFJJqfNIhwftfK4c8qs6S7aLvRIfMXmDApG3hvvQbOCy_bmpZQlbXJC_tGOMAq9fX8h_cJuDPk-q8_mA4Y1DQ3HguGAywmsKiNqapms8iwYcNDvgzCOKzdP8QbJKIT6sGrMIpRfqw0ueJUvSTjDwIOlKUPngYHVgrAODtiZb44POOH4R645uZ4Pom3wuJM8xjlBxLkbtPj-yQYJIgOyZ0VraRYLbDfq_ZEJudK-xLPfVyQol_Xn2pBtiyyY_58Lvsr-Av4X8m3_qEoV4Zoi_ifzodEDj0q850qsnAiFwweHUjLdfNvLB9VmSVOXHHUFfrqEsZIGTbPMEtgqd_dWBoqXRr91CySoEGTTJPctZujrfMalMylvh6RLwF9Bo-EVwLM5u3BGo6c-1MZYEtOKHOlIZ31JQoT_sQh7AHSBcQB8-UrQpTlVNF2sClZo.HLaDY3BA3z6D31xfRF_3mQ; rtkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.0o7_MkcLaYq7IBBkqwIiVd5eCQg-hSlU37oli2CzGJiaKLeeR0e3SA.3widCejtq8ISykGP.znWZlYC94UCgieAU9whdv6dKnKwiaSFWA-0YyJgibmTg1mvbiHcAQdYTwUAwvABtkcG32beXvvVqsv3ArfX7JRRWg_-6OJI-2SJrzTReOjc496hXzmigx2-Aa7ll-hoBFJdHTVGlnpQBqyOaawcr-52T8KYwxOJRZYRgSvV8DKiR5LaTTK-QaPtph7Z4baNmsSnU_CE5MwVsYbcQtOFUhISSjs1XLaPtY6t9zoezM2KK8KBekWdq3cd2ZqPpTED5YazO04KUfDXq_FjigoCoMR0mPdJpBma7jmiQhKlXD2u8vI5DmoLwTuCdPuUSPJOoINTFWIfQVMGPrqxwkuDWAPu_nWJV1ngGN9fovpjE_yHdStSdTQ60VLPCQRiI-FWDQrgntfcSmXu1phLuWwcBu8hNBJvvMwOP6DoLrsOaUNmnMm4DNte3nWjsBnzvzmzS4opJRRYrqxg98F0jdRdso6YTZTpePp32nRAtSgtgu5A13pYMIy-1ctQVXWL89_rZop_Evps9.JG41FeZpFM0yTFFPLowi4A; sso_invalidate_cache=true; ACT_SSO_EVENT=LOGIN_SUCCESS:1580249376361; OptanonConsent=isIABGlobal=false&datestamp=Tue+Jan+28+2020+14%3A09%3A37+GMT-0800+(Pacific+Standard+Time)&version=5.6.0&landingPath=NotLandingPage&groups=1%3A1%2C0_174752%3A1%2C0_174753%3A1%2C2%3A1%2C0_219555%3A1%2C0_174778%3A1%2C0_174774%3A1%2C0_174754%3A1%2C0_174792%3A1%2C0_174755%3A1%2C3%3A1%2C0_219550%3A1%2C0_174756%3A1%2C4%3A1%2C0_219557%3A1%2C0_174799%3A1%2C0_174757%3A1%2C0_174804%3A1%2C0_174758%3A1%2C0_219548%3A1%2C0_174759%3A1%2C0_174760%3A1%2C0_174761%3A1%2C0_174762%3A1%2C0_174763%3A1%2C0_219558%3A1%2C0_219560%3A1%2C0_174764%3A1%2C0_174765%3A1%2C0_219561%3A1%2C0_219563%3A1%2C0_174766%3A1%2C0_219564%3A1%2C0_174767%3A1%2C0_174768%3A1%2C0_219565%3A1%2C0_174769%3A1%2C0_174770%3A1%2C0_174771%3A1%2C0_174772%3A1%2C0_174773%3A1%2C0_174775%3A1%2C0_174776%3A1%2C0_174777%3A1%2C0_174779%3A1%2C0_174780%3A1%2C0_174781%3A1%2C0_174782%3A1%2C0_174783%3A1%2C0_174784%3A1%2C0_174785%3A1%2C0_174786%3A1%2C0_174787%3A1%2C0_174788%3A1%2C0_174789%3A1%2C0_174790%3A1%2C0_174791%3A1%2C0_174793%3A1%2C0_174794%3A1%2C0_174795%3A1%2C0_174796%3A1%2C0_174797%3A1%2C0_174798%3A1%2C0_174800%3A1%2C0_174801%3A1%2C0_174802%3A1%2C0_174803%3A1%2C0_216175%3A1%2C0_218306%3A1%2C0_218307%3A1%2C0_218308%3A1%2C0_218309%3A1%2C0_219559%3A1%2C0_219547%3A1%2C0_219551%3A1&AwaitingReconsent=false; mbox=PC#b769574176bd460da1791d0cf0a0b996.28_0#1643494178|session#cb4d7323189f4a0482fe697907e4e0ea#1580251218';

export function getNestedProperty(obj, ...args) {
  return args.reduce((obj, level) => obj && obj[level], obj);
}

export const gameMap = {
  //standard Maps
  mp_m_speed: 'speedball',
  mp_m_hill: 'hill',
  mp_m_overwinter: 'Over Winter',
  mp_runner: 'gun runner',
  mp_cave_am: 'Azhir Cave (Night)',
  mp_cave: 'Azhir Cave',
  mp_crash2: 'crash',
  mp_m_speedball: 'speedball',
  mp_petrograd: 'st. petrogard',
  mp_piccadilly: 'piccadilly',
  mp_m_pine: 'pine',
  mp_spear: 'spear',
  mp_spear_pm: 'spear',
  mp_shipment: 'shipment',
  mp_vacant: 'vacant',
  mp_hackney_am: 'hackney yard',
  mp_aniyah: 'aniyah',
  mp_quarry2: 'karst river quarry',
  mp_euphrates: '⁠euphrates bridge',
  mp_m_overunder: 'over Under',
  mp_downtown_gw: '⁠downtown Donetsk',
  mp_deadzone: 'deadzone',
  mp_raid: 'raid',
  mp_m_king: 'King',
  mp_m_showers: 'shower',
};

export const modeMap = {
  dom: 'dominiation',
  arena: 'arena',
  conf: 'kill confirmed',
  conf_hc: 'kill confirmed hardcore',
  arm: 'arms race',
  dom_hc: 'domination hardcore',
  war: 'war',
  war_hc: 'war hardcore',
};
//will remove trailing 0s and only return decimal by itself
const formatAccuracy = accuracyString => {
  let accuracy = accuracyString.split('.')[1];
  return `.${accuracy}`;
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function extractBusinessData(data) {
  return data.map(val => {
    return {
      map: gameMap[val.map] || val.map,
      type: modeMap[val.mode] || val.mode,
      kills: val.playerStats && val.playerStats.kills,
      deaths: val.playerStats && val.playerStats.deaths,
      accuracy:
        val.playerStats && val.playerStats.accuracy
          ? formatAccuracy(Number(val.playerStats.accuracy).toFixed(2))
          : '0.0',
      result: val.result,
    };
  });
}
