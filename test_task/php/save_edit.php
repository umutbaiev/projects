<?php

$data = $_POST;
$id = (int)$data['id'];
$msg = $data['text_msg'];

$json = file_get_contents('../users.json');
$users = json_decode($json, true);
$i = 0;

foreach($users as $param) {
    
    if($param['id'] == $id) { 
        $users[$i]['message'] = $msg;
        echo('Успешно сохранено');    
    }
    $i++; 
}

$contents = json_encode($users);
file_put_contents('../users.json', $contents); 
?>
