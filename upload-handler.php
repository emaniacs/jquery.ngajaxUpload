<?php

$ret = array('success'=>false, 'data'=>'Empty request.');

$uploadPath = '/tmp/' ;
$outputFile = $uploadPath . $_FILES['ajax-file']['name'];

if (isset ($_FILES['ajax-file'])) {
    if (move_uploaded_file($_FILES['ajax-file']['tmp_name'], $outputFile)) {
        $ret['success'] = true;
        $ret['data'] = 'Upload success.';
    }
    else {
        $ret['data'] = 'Failed to moving file.';
    }
    $ret['file'] = $_FILES['ajax-file'];
}

header('Content-Type', 'application/json');
echo json_encode($ret);
die;
?>
