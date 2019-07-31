$("#tabs").tabs();

// numero de tabs geradas
$numTabs = $("#tabs ul li").length

// fun��o do bot�o pr�ximo
$("#prox").click(function(){  
  // aba que esta ativa no momento
  $currentTab = parseInt($("#tabs ul li.ui-state-active a").attr("id").replace(/\D/g,''));
  
  // se for a ultima, nao deixa mudar
  // caso contr�rio, vai pra prox
  if ($currentTab == $numTabs){
    alert("J� est� na ultima aba")
  } else {
    $("#ui-id-" + ($currentTab + 1)).click();
  }
})

// fun��o do bot�o anterior
$("#ant").click(function(){  
  // aba que esta ativa no momento
  $currentTab = parseInt($("#tabs ul li.ui-state-active a").attr("id").replace(/\D/g,''));
  
  // se for a primeira, nao deixa mudar
  // caso contr�rio, vai pra anterior
  if ($currentTab == 1){
    alert("J� est� na primeira aba")
  } else {
    $("#ui-id-" + ($currentTab - 1)).click();
  }
})