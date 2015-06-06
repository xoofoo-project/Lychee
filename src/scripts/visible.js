/**
 * @description	This module is used to check if elements are visible or not.
 * @copyright	2015 by Tobias Reich
 */

visible = {}

visible.albums = function() {
	if ($('#tools_albums').css('display')==='block') return true;
	return false;
}

visible.album = function() {
	if ($('#tools_album').css('display')==='block') return true;
	return false;
}

visible.photo = function() {
	if ($('#imageview.fadeIn').length>0) return true;
	return false;
}

visible.search = function() {
	if (search.hash!==null) return true;
	return false;
}

visible.sidebar = function() {
	if (sidebar.dom().hasClass('active')===true) return true;
	return false;
}

visible.sidebarbutton = function() {
	if (visible.albums()) return false;
	if (visible.photo()) return true;
	if (visible.album()&&$('#button_info_album:visible').length>0) return true;
	return false;
}

visible.header = function() {
	if (header.dom().hasClass('hidden')===true) return false;
	return true;
}

visible.message = function() {
	if ($('.message').length>0) return true;
	return false;
}

visible.signin = function() {
	if ($('.message .sign_in').length>0) return true;
	return false;
}

visible.contextMenu = function() {
	return basicContext.visible();
}

visible.multiselect = function() {
	if ($('#multiselect').length>0) return true;
	return false;
}