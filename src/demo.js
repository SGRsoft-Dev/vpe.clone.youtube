window.player = null
let autoPlayMode = true;
let fullMode = true;

const changeMode = () => {
    document.querySelector('#contentFrame').classList.remove('fullMode');
    document.querySelector('#contentFrame').classList.remove('basicMode');
    if(fullMode){
        document.querySelector('#contentFrame').classList.add('fullMode');
    }else{
        document.querySelector('#contentFrame').classList.add('basicMode');
    }

}

document.addEventListener('DOMContentLoaded', () => {

    if(localStorage.getItem('autoPlayMode') === 'Y'){
        autoPlayMode = true;
    }else{
        autoPlayMode = false;
    }

    if(localStorage.getItem('fullMode') === 'Y'){
        fullMode = true;
    }else{
        fullMode = false;
    }

    changeMode();

    window.player = new ncplayer('player',{
        playlist:[
            {
                file:'https://fsxikvammvwv14470411.cdn.ntruss.com/hls/9N5-iJ4f9tdzE6D708PTmg__/vod/j5IXBfIJ83893893_,1080,720,480,p.mp4.smil/master.m3u8',
                poster:'https://wnfosehmzhuc12665447.cdn.ntruss.com/thumb/sample_thumb.png?type=m&w=1024&h=760&ttype=jpg',
                description: {
                    title: "네이버클라우드 소개 영상",
                    created_at: "2023.07.13",
                    profile_name: "네이버클라우드",
                    profile_image: "https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png"
                },
            }
        ],
        autostart:true,
        controlBtn:{
            play:true,
            fullscreen:true,
            volume:true,
            times:true,
            pictureInPicture:true,
            setting:true,
            subtitle:true,
        },
        progressBarColor:"#ff0000",
        controlActiveTime:3000,
        aspectRatio:"16/9",
        objectFit:"contain",
        lowLatencyMode:true,

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
    })
});
