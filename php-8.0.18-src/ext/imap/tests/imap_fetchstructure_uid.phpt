--TEST--
imap_fetchstructure() passing a unique ID
--SKIPIF--
<?php
require_once(__DIR__.'/setup/skipif.inc');
?>
--FILE--
<?php

require_once(__DIR__.'/setup/imap_include.inc');

$imap_mail_box = setup_test_mailbox_for_uid_tests("imapfetchstructureuid", $msg_no, $uid);

// Usage of == because comparing objects
var_dump(imap_fetchstructure($imap_mail_box, $uid, FT_UID) == imap_fetchstructure($imap_mail_box, $msg_no));

imap_close($imap_mail_box);

?>
--CLEAN--
<?php
$mailbox_suffix = 'imapfetchstructureuid';
require_once(__DIR__ . '/setup/clean.inc');
?>
--EXPECT--
Create a temporary mailbox and add 10 msgs
New mailbox created
Delete 4 messages for Unique ID generation
bool(true)
