$(document).ready(function(){
  
  //dashboard-menu-list
  $('.menu-area ul li').on('click',function(e){
  

    $(this).children('ul').slideToggle();
    $(this).children('span').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  //delete Btn
  $('.dlt-btn').on('click',function(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  });


  //image preview 
  $('.za-fimg-box ').hide();

  $('#fImage').on('change',function(event){
    $('.za-fimg-box ').show();
    let image = URL.createObjectURL(event.target.files[0]);
    $('#feature_img').attr('src',image);
  });
  //image preview hide
  $('.za-removeimg').on('click',function(){
    $('.za-fimg-box ').hide();
    $('#fImage').val('');
  });

  //mobile-menu

  $('.logo-area span').on('click',function(){
    $('.menu-area').slideToggle();
    $('.logo-area').children('span').toggle();
  });

});