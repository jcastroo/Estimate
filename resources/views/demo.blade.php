
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST" action="">
  <p>Selecione o tipo de produto/serviço:</p>
  <label><input type="checkbox" name="tipo[]" value="produto" onclick="atualizarPreco()"> Produto</label><br>
  <label><input type="checkbox" name="tipo[]" value="servico" onclick="atualizarPreco()"> Serviço</label><br>

  <div id="quantidades">
    <p>Selecione a quantidade:</p>
    <label><input type="checkbox" name="quantidade[]" value="1" onclick="atualizarPreco()"> 1</label><br>
    <label><input type="checkbox" name="quantidade[]" value="2" onclick="atualizarPreco()"> 2</label><br>
    <label><input type="checkbox" name="quantidade[]" value="3" onclick="atualizarPreco()"> 3</label><br>
  </div>

  <div id="localizacoes" style="display:none">
    <p>Selecione a localização:</p>
    <label><input type="checkbox" name="localizacao[]" value="interior" onclick="atualizarPreco()"> Interior</label><br>
    <label><input type="checkbox" name="localizacao[]" value="litoral" onclick="atualizarPreco()"> Litoral</label><br>
    </div>
  <input type="submit" name="submit" value="Calcular preço">
</form>
<p>O preço final é: R$ <span id="preco_final">0,00</span></p>

<script>
function atualizarPreco() {
  var tipos = document.getElementsByName('tipo[]');
  var quantidades = document.getElementsByName('quantidade[]');
  var localizacoes = document.getElementsByName('localizacao[]');

  // Verifica se o tipo de produto/serviço selecionado é "serviço"
  var preco_base = 0;
  if (tipos[1].checked) {
    preco_base = 20;
    document.getElementById('localizacoes').style.display = 'block';
  } else {
    document.getElementById('localizacoes').style.display = 'none';
  }

  // Conta a quantidade selecionada
  var quantidade_selecionada = 0;
  for (var i = 0; i < quantidades.length; i++) {
    if (quantidades[i].checked) {
      quantidade_selecionada++;
    }
  }

  // Calcula a taxa adicional com base na quantidade selecionada
  var taxa_adicional = quantidade_selecionada * 5;

  // Verifica se a localização "litoral" foi selecionada
  if (localizacoes[1].checked) {
    taxa_adicional += 10;
  }

  // Calcula o preço final
  var preco_final = preco_base + taxa_adicional;

  // Exibe o preço final na página
  document.getElementById('preco_final').innerHTML = preco_final.toFixed(2);
}
</script>


<?php
if (isset($_POST['submit'])) {
  $tipos = isset($_POST['tipo']) ? $_POST['tipo'] : array();
  $quantidades = isset($_POST['quantidade']) ? $_POST['quantidade'] : array();
  $localizacoes = isset($_POST['localizacao']) ? $_POST['localizacao'] : array();

  $preco_base = 0;
  $taxa_adicional = 0;

  // Verifica se o tipo de produto/serviço selecionado é "serviço"
  if (in_array('servico', $tipos)) {
    $preco_base = 20;
    // Verifica se a localização "interior" foi selecionada
    if (in_array('interior', $localizacoes)) {
      $taxa_adicional += 5;
    }
    // Verifica se a localização "litoral" foi selecionada
    if (in_array('litoral', $localizacoes)) {
      $taxa_adicional += 10;
    }
  }

  // Conta a quantidade selecionada
  $quantidade_selecionada = 0;
  foreach ($quantidades as $quantidade) {
  $quantidade_selecionada += $quantidade;
  }

  // Calcula a taxa adicional com base na quantidade selecionada
  $taxa_adicional += $quantidade_selecionada * 5;

  // Calcula o preço final
  $preco_final = $preco_base + $taxa_adicional;

  // Exibe o preço final na página
  echo "O preço final é: R$ " . number_format($preco_final, 2, ',', '.');
  }
  ?>

</body>
</html>

