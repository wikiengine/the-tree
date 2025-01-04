function fetchNamespaces() {
	return ['문서', '틀', '분류', '파일', '사용자', '특수기능', '더시드'];
}
//config.getString('wiki.site_name', '더 시드'), '토론', '휴지통', '투표'].concat(hostconfig.custom_namespaces || []
function processTitle(data) {
	const sp = data.split(':');
	var ns = sp.length > 1 ? sp[0] : '문서';
	var title = data;
	var forceShowNamespace = false;
	var nslist = fetchNamespaces();
	if(nslist.includes(ns)) {
		title = data.replace(ns + ':', '');
		if(sp[2] !== undefined && ns == '문서' && nslist.includes(sp[1])) {
			forceShowNamespace = true;
		}
	} else {
		title = data;
		ns = '문서';
	}

	return {
		title, 
		namespace: ns, 
		forceShowNamespace,
		toString() {
			if(forceShowNamespace || this.namespace != '문서')
				return this.namespace + ':' + title;
			else
				return title;
		}
	};
}

export {
    processTitle
}