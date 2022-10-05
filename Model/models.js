function Student(_id,_name,_email,_password,_mathScore,_physicScore,_chemicalScore){
    this.id = _id;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.mathScore = _mathScore;
    this.physicScore = _physicScore;
    this.chemicalScore = _chemicalScore;
    this.tinhDTB = function () {
        var dtb = (this.mathScore*1 + this.physicScore*1 + this.chemicalScore*1) / 3;
        return dtb.toFixed(1);
      };
}