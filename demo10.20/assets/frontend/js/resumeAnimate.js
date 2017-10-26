  $(function(){


    var anite = function (obj,cs){
        $(obj).removeClass("hide");
        $(obj).addClass(cs);
        $(obj).on('animationend webkitAnimationEnd',function (){
            $(obj).removeClass(cs);
        })
    }

    function section(){
        
        $('.section1').delay(50).animate({
            opacity: '1'
        }, 100, function(){
            $(".resume").addClass("on");
            setTimeout(function(){
                $(".resume").addClass("dong") 
            },250)
        });
    }
    section();

    $('#dowebok').fullpage({
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent',"transparent","transparent","transparent"],
        afterLoad: function(anchorLink, index){
            if(index == 1){
                section();
                
            }
            if(index == 2){
                anite($('.section2 .fp-tableCell>div'),"animation_3d_top");
                var qxMuneLi = $(".qxMune li");
                $(".qxMune li").hover(
                  function(){
                    $(this).find(".info").animate({
                      left:"100%"
                    })
                  },
                  function(){
                    $(this).find(".info").animate({
                      left:"0"
                    })
                })


                
               
            }
            if(index == 3){
                $(".qxgd.style").animate({
                  left: '0'
                 },500,function(){
                      $(this).addClass("skew")
                 });
                 $(".wmanMenu li").each(function(i){
                   $(this).on("click",function(){
                    $(this).addClass("active");
                    $(this).siblings("li").removeClass("active");
                    $(".anCase>div").eq(i).addClass("active");
                    $(".anCase>div").eq(i).siblings("div").removeClass("active");
                   })
                 })   
            }
            if(index == 4){
                $(".section4").removeClass("hide")
                function factory(obj,str){
                    this.len = 0; 
                    this.txtDom = "";
                    this.str = "";
                    this.arrTxt = [];  
                    this.init(obj,str);
                }

                factory.prototype = {
                    constructor:factory, 
                    init:function(obj,str){ 
                        this.obj = obj;
                        this.str = str;   
                        this.txtDom = this.str.replace(/\s+/g,"");
                        obj.innerHTML = "";
                        this.len = this.txtDom.length;
                        this.addDom(obj);
                       
                    }, 
                     addDom:function(obj){

                        for(var i=0;i<this.len;i++){
                            var spanDom = "";
                            spanDom = document.createElement("span");
                            spanDom.innerHTML = this.txtDom.substring(i,i+1);
                            this.obj.appendChild(spanDom);
                            this.arrTxt.push(spanDom);
                        };
                        for(var j=0;j<this.len;j++){
                            this.arrTxt[j].style.position = "relative";
                        };
                        this.start();
                    },
                    start:function(){
                        for(var i=0;i<this.len;i++){
                            this.arrTxt[i].onmouseover = function(){

                                this.stop = 0;
                                this.speed = -1;
                                var $this = this;
                                this.timer = setInterval(function(){

                                    $this.stop += $this.speed;//0  += -1
                                    if($this.stop <= -20){
                                        $this.speed = 1;
                                    }

                                    $this.style.top = $this.stop + "px";

                                    if($this.stop >= 0){
                                        clearInterval($this.timer)
                                        $this.style.top = 0 + "px";
                                    };

                                },15);
                            };
                        }
                    }
                }
                var str1 = '在政府资金投入的杠杆作用下，撬动了一批企业带头加大创新投入,春芽以其坚韧的品格，炽热的进取之心，不断向前... ....';
                var str2 = '让人们无论任何时间、任何地点，都可以通过任何设备、任何网络，获得数据、图像和声音的自由通信。为人们带来选择的自由和效率的提升... ...';
                var str3 = '在光通讯发展的近10年中，公司服务了千千万万的在日华人，为他们解决生活中的各种问题，在服务他人的同时，也赢得了自己的口碑... ...';
                var str4 = '肯定了我公司长期以来取得的巨大进步，在人才培养，技术支持等方面取得很大的成功，公司会以其强悍的战斗力迎接每一次挑战... ...';
                var str5 = '以网络信息化服务为主导、计算机软硬件技术为配套，现已发展成为集开发、销售、及IT服务于一体的综合电子商务公司... ...';

                new factory($(".leftInfor .lInfor").eq(0).find("div")[0],str1);
                new factory($(".leftInfor .lInfor").eq(1).find("div")[0],str2);
                new factory($(".rightInfor .lInfor").eq(0).find("div")[0],str3);
                new factory($(".rightInfor .lInfor").eq(1).find("div")[0],str4);
                new factory($(".rightInfor .lInfor").eq(2).find("div")[0],str5);                 

                if($(window).height()<660){
                     $(".qxxw .leftInfor").animate({
                      left:"-27%"
                    },400);
                    $(".qxxw .rightInfor").animate({
                      right:"-36%"
                    },400);
                }  else{
                   $(".qxxw .leftInfor").animate({
                    left:"1%"
                  },400);
                  $(".qxxw .rightInfor").animate({
                    right:"-5%"
                  },400);
                }


             $(".rDate").hover(function(){
              $(this).closest(".clearfix").find(".lInfor .title").css({color:"#027afd"})
             },function(){
              $(this).closest(".clearfix").find(".lInfor .title").css({color:"#fff"})
             })   

            }
            if(index == 5){
                var time = 400;
                var a = 0;
                var $entryLi = $('.gywmMenu li');
                function dg(){
                     
                     $entryLi.eq(a).animate({
                         left :''+a*$entryLi.outerWidth(true)+'px'
                     },time,function(){
                          a++;
                          if(a == $entryLi.size()){
                             return;        
                          }
                          dg();
                     })
                }
                dg();
            }
            if(index == 6){
       
            }
        },
        onLeave: function(index, direction){
            if(index == 1){
              
            }
            if(index == 2){
              setTimeout(function(){
                 $('.section2 .fp-tableCell>div').addClass("hide")
             },100)
            }
            if(index == 3){
               setTimeout(function(){
                    $(".qxgd.style").css({left:"-250%"}).removeClass("skew")
                },300)

            }
            if(index == 4){
                var $qxxwl = $(".qxxw .leftInfor");
                var $qxxwr = $(".qxxw .rightInfor");
                $qxxwl.animate({
                  left:"-50%"
                },400);
                $qxxwr.animate({
                  right:"-55%"
                },400);
            }
            if(index == 5){
                var time = 50;
                var a = 0;
                var $entryLi = $('.gywmMenu li');
                function dg(){
                     $entryLi.eq(a).animate({
                         left :'-100%'
                     },time,function(){
                          a++;
                          if(a == $entryLi.size()){
                             return;        
                          }
                          dg();
                     })
                }
                setTimeout(function(){
                  dg();
                },100)
            }
            if(index == 6){
       
            }
        },
        navigation: true
//      continuousVertical: true
    });
});