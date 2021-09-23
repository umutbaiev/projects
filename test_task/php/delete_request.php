<?php 
    $data = $_POST;
    $id = (int)$data['id'];
    
    $json = file_get_contents('../users.json');
    $users = json_decode($json, true);
    $i = 0;
    
    foreach($users as $param) {
        
        if($param['id'] == $id) { 
            unset($users[$i]);
            echo('Успешно удалено');    
        }
    
        $i++;
    }
    $contents = json_encode($users); 
    file_put_contents('../users.json', $contents); 
?>