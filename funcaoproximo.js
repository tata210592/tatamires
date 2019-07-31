$("#tabs").tabs();

// numero de tabs geradas
$numTabs = $("#tabs ul li").length

// função do botão próximo
$("#prox").click(function(){  
  // aba que esta ativa no momento
  $currentTab = parseInt($("#tabs ul li.ui-state-active a").attr("id").replace(/\D/g,''));
  
  // se for a ultima, nao deixa mudar
  // caso contrário, vai pra prox
  if ($currentTab == $numTabs){
    alert("Já está na ultima aba")
  } else {
    $("#ui-id-" + ($currentTab + 1)).click();
  }
})

// função do botão anterior
$("#ant").click(function(){  
  // aba que esta ativa no momento
  $currentTab = parseInt($("#tabs ul li.ui-state-active a").attr("id").replace(/\D/g,''));
  
  // se for a primeira, nao deixa mudar
  // caso contrário, vai pra anterior
  if ($currentTab == 1){
    alert("Já está na primeira aba")
  } else {
    $("#ui-id-" + ($currentTab - 1)).click();
  }
})