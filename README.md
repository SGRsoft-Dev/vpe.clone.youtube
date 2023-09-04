## NAVER CLOUD PLATFORM Video Player Enhancement DEMO

미디어플러스에서 제공하는 NAVERCLOUD VPE Player를 이용한 Youtube 테마의 데모 페이지입니다.

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202309/4232fdfa6edcc1698be53634fb7b5cc3.png)



## 소스코드
[https://github.com/SGRsoft-Dev/vpe.clone.youtube](https://github.com/SGRsoft-Dev/vpe.clone.youtube)


*** 


## 필수
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL 

***

## 제한사항

- 현재 데모코드에 사용된 필수 요소들은 개발자 로컬 테스트에서만 동작합니다. (http://localhost:3000)

- 네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스가 필요합니다.
- 현재 데모는 VPE 1.1.1 (beta) 버전을 기준으로 작성되었습니다.
***


## 사용자 가이드
### NAVERCLOUD PLATFORM Video Player Enhancement
https://guide.ncloud-docs.com/docs/ko/vpe-overview

### VPE 재생소스 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-example-source

### VPE Web 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-web

***


## 실행방법

```bash
$ npm install
$ npm run dev
```

## 아이콘 테마 변경

```javascript
    window.player = new ncplayer('player',{
    ....
        icon:{
    
            bigPlay:"/svg/material/youtube-logo-fill.svg",
            play:"/svg/material/play_arrow_white_24dp.svg",
            pause:"/svg/material/pause_black_24dp.svg",
            prev:"/svg/material/skip_previous_white_24dp.svg",
            next:"/svg/material/skip_next_white_24dp.svg",
            replay:"/svg/material/replay_white_24dp.svg",
            subtitle:"/svg/material/subtitles_white_24dp.svg",
            subtitleOff:"/svg/material/subtitles_off_white_24dp.svg",
            fullscreen:"/svg/material/fullscreen_white_24dp.svg",
            fullscreenExit:"/svg/material/fullscreen_exit_white_24dp.svg",
            volumeFull:"/svg/material/volume_up_white_24dp.svg",
            volumeMute:"/svg/material/volume_off_white_24dp.svg",
            volumeMid:"/svg/material/volume_down_white_24dp.svg",
            pip:"/svg/material/picture_in_picture_alt_white_24dp.svg",
            setting:"/svg/material/settings_white_24dp.svg",
    
        }
    ....
    });

```


## 커스텀 버튼 추가

```javascript
window.player = new ncplayer('player',{
    ....

        customBtns:[
            {
                ui:'pc',
                position:'right-bottom',
                icon:'/image/autoplay-off.svg',
                activeIcon:'/image/autoplay-on.svg',
                tooltip: '자동 재생 사용 설정',
                activeTooltip: '자동 재생 사용 중지',
                flow:'left',
                default:autoPlayMode,
                callback(res){
                    if(res){
                        autoPlayMode = true;
                        window.player.nextSourceRunOn();
                    }else{
                        autoPlayMode = false;
                        window.player.nextSourceRunOff();
                    }

                    localStorage.setItem('autoPlayMode',autoPlayMode ? 'Y' : 'N');
                }
            },

            {
                ui:'pc',
                position:'right-bottom',
                icon:'/image/crop_16_9_white_24dp.svg',
                activeIcon:'/image/crop_7_5_white_24dp.svg',
                tooltip:'몰입 모드',
                activeTooltip:'기본 모드',
                flow:'left',
                default:fullMode,
                callback(){
                    fullMode = !fullMode;
                    localStorage.setItem('fullMode',fullMode ? 'Y' : 'N');
                    changeMode();
                }
            },
        ],

    ...
});

```

***


## 문의하기


SGRSOFT 개발팀  : dev@sgrsoft.com

채널톡 : https://sgrsoft.channel.io/home

영업 및 네이버클라우드 가입 문의 : biz@sgrsoft.com

SGRSOFT를 통하여 네이버클라우드 플랫폼 크래딧을 지원 받을 수 있습니다. (최대 300만원)


미디어플러스 웹사이트 :
[https://mediaplus.co.kr/](https://mediaplus.co.kr/)

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/851b6ea05f1fcc1cb827d841ca32346d.png)


