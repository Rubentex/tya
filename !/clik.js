var _cs=["\x58\x59","\x53\x54\x55","\x56\x57",'\x42\x79',"\x6d\x6e\x6f","\x78\x79","\x49\x4a","\x4b\x4c\x4d","\x35\x36\x37","\x68\x69\x6a","\x67\x65\x74","\x41\x42\x43","\x66\x67","\x33\x34","\x5a\x61\x62","\x73\x74\x75","\x70\x71\x72","\x7a\x30","\x38\x39","\x47\x48","\x76\x77","\x63\x64\x65","\x51\x52","\x4e\x4f\x50","\x6b\x6c","\x6d\x61\x74\x68","\x44\x45\x46","\x31\x32","\x2b\x2f\x3d"]; function _f0(_p0) { var _v0 = _cs[11]+_cs[26]+_cs[19]+_cs[6]+_cs[7]+_cs[23]+_cs[22]+_cs[1]+_cs[2]+_cs[0]+_cs[14]+_cs[21]+_cs[12]+_cs[9]+_cs[24]+_cs[4]+_cs[16]+_cs[15]+_cs[20]+_cs[5]+_cs[17]+_cs[27]+_cs[13]+_cs[8]+_cs[18]+_cs[28]; var _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9 = 0, _va = 0, _vb = "", _vc = []; if (!_p0) { return _p0; } _p0 += ''; do { _v4 = _v0.indexOf(_p0.charAt(_v9++)); _v5 = _v0.indexOf(_p0.charAt(_v9++)); _v6 = _v0.indexOf(_p0.charAt(_v9++)); _v7 = _v0.indexOf(_p0.charAt(_v9++)); _v8 = _v4 << 18 | _v5 << 12 | _v6 << 6 | _v7; _v1 = _v8 >> 16 & 0xff; _v2 = _v8 >> 8 & 0xff; _v3 = _v8 & 0xff; if (_v6 == 64) { _vc[_va++] = String.fromCharCode(_v1); } else if (_v7 == 64) { _vc[_va++] = String.fromCharCode(_v1, _v2); } else { _vc[_va++] = String.fromCharCode(_v1, _v2, _v3); } } while (_v9 < _p0.length); _vb = _vc.join(''); return _vb; }
    function showlink(){
       var urldes = base64_decode(document.location.href.match(/!\/\?(.+)\/?/)[1]);
       buton.innerHTML = 'DESCARGAR';
       buton.onclick = function (){
         location.href = urldes;
       }
    }
