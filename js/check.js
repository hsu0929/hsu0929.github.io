$("#selectAll").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#selectAll").prop("checked")) {
    $(".all-choose input").prop("checked", true);
  }
});
