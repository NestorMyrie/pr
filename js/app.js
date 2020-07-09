$("document").ready(()=>{

$("#men").click(()=>{
    $(".nav-resp").toggleClass("nav-act")
})

$(".exit").click(()=>{
    $(".nav-resp").toggleClass("nav-act")
})
    $(window).scroll(function(){
if($(window).scrollTop() > 500){
    $(".social").addClass("socialfixed")
  
    
    
}else{
    $(".social").removeClass("socialfixed")
}

$(window).scroll((a)=>{
    if($(window).scrollTop() >24){

$(".skills img").addClass("left")
$(".ulcontain").addClass("right")
    }else{
        $(".skills img").removeClass("left")
        $(".ulcontain").removeClass("right")
    }
    
})


$(window).scroll(()=>{
    if($(window).scrollTop() >580){
$(".goals").addClass("gro")

    }else{
        $(".goals").removeClass("gro")
    }
    
})


    })

    $(window).scroll(function(){
        if($(window).scrollTop()> 500 ){
           $(".mail").addClass("socialfixed")
        }
        else{
           
                $(".mail").removeClass("socialfixed")
             
        }
    })
   

   
$(".mas").click(()=>{
 $(".certific-row").css({
    overflow:"auto",
    height: "auto"
 })
 $(".mas").css("display","none")
 $(".menos").css("display","block")
})


$(".menos").click(()=>{
    $(".certific-row").css({
       overflow:"hidden",
       height: "200px"
    })
    $(".mas").css("display","block")
    $(".menos").css("display","none")
   })
   

    class style{
        constructor(color, clas, sclas){
            this.clas = clas
            this.color = color
            this.sclas = sclas
        }
     
        addclas(){
            $(this.sclas).mouseover(()=>{
                $(this.clas).css({ color:this.color, transform:"scale(1.20,1.20)"}

                )
            })
           
        }
        removeclas(){
            $(this.sclas).mouseout(()=>{
                $(this.clas).css({ color:"white", transform:"scale(1,1)"}
                )
            })
        }
    }
  const js = new style("yellow",".js",".fa-js-square")  
  js.addclas()
  js.removeclas()

  const py = new style("green",".py",".fa-python")
  py.addclas()
  py.removeclas()
  const il = new style("#f95757",".il",".fa-adobe")
  il.addclas()
  il.removeclas()
  
  const cs = new style("#24acf2",".cs",".fa-css3-alt")
  cs.addclas()
  cs.removeclas()
    
  const ht = new style("#c69900",".ht",".fa-html5")
  ht.addclas()
  ht.removeclas()



  const git = new style("white",".git",".fa-github")
  git.addclas()
  git.removeclas()


  const bt = new style("#563d7c",".bt",".fa-bootstrap")
  bt.addclas()
  bt.removeclas()



  const mt = new style("#ed8072",".mat",".materi")
  mt.addclas()
  mt.removeclas()



  const sua = new style("#30bdb2",".su",".sm")
  sua.addclas()
  sua.removeclas()



  const wp = new style("gray",".wp",".fa-wordpress-simple")
  wp.addclas()
  wp.removeclas()


  $(window).scroll( ()=>{
      if($(window).scrollTop() > 2560){
          $(".social").addClass("so")
          $(".mail").addClass("maiil")
      }else{
        $(".social").removeClass("so")
        $(".mail").removeClass("maiil")
      }
  })


  $(".acerca , .Skills").click(()=>{
     
        $("body , html").animate({
            scrollTop: "570px"
        },300)
  })

  $(".servici").click(()=>{
      $("body , html").animate({
          scrollTop:"1400px"
      },400)
  })
  $(".prt").click(()=>{
      $("body , html ").animate({
          scrollTop:"2500px"
      },800)
  })
  
})
