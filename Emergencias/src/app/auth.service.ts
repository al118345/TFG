import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "../environments/environment"
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Users } from './model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private userSubject: BehaviorSubject<Users>;
  //public user: Observable<Users>;

  constructor(private router: Router, private http: HttpClient) { }
  
 /* public get userValue(): Users {
    return this.userSubject.value;
  }

  sendToken(token: string, id_user: string, name: string, surname: string, email: string, photo: string) {
    localStorage.setItem("LoggedInUser", token)
    localStorage.setItem("id_user", id_user)
    localStorage.setItem("name_user", name)
    localStorage.setItem("surname_user", surname)
    localStorage.setItem("email_user", email)
    localStorage.setItem("avatar", photo)
    
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("id_user")
    localStorage.removeItem("name_user")
    localStorage.removeItem("surname_user")
    localStorage.removeItem("email_user")
    localStorage.removeItem("avatar")
    localStorage.removeItem("role")
    localStorage.removeItem("sociedad")
    localStorage.removeItem("name_sociedad")
    localStorage.removeItem("language")
    localStorage.removeItem("anonimo")
    localStorage.removeItem("remitente")
    localStorage.removeItem("aviso")
    localStorage.removeItem("consultas")
    this.router.navigate(["/inicio"]);
  }

  getRole() {
    return localStorage.getItem("role")
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  getIdUser(){
    return localStorage.getItem("id_user")
  }

  getNameUser(){
    return localStorage.getItem("name_user")
  }

  setRole(role){
    localStorage.setItem("role", role);
  }

  setNameUser(name){
    localStorage.setItem("name_user", name);
  }

  setNameSociedad(name){
    localStorage.setItem("name_sociedad", name);
  }

  getNameSociedad(){
    return localStorage.getItem("name_sociedad")
  }

  getSurnameUser(){
    return localStorage.getItem("surname_user")
  }

  setSurnameUser(surname){
    localStorage.setItem("surname_user", surname)
  }
  
  getEmailUser(){
    return localStorage.getItem("email_user")
  }

  setEmailUser(email){
    localStorage.setItem("email_user", email)
  }

  getPhotoUser(){
    let photo = localStorage.getItem("avatar");
    if (photo == "" || photo == "null"){
      photo = environment.baseAvatar + "avatar.png";
      localStorage.setItem("avatar", photo)
    }
    return photo;
  }

  setPhotoUser(photo){
    localStorage.setItem("avatar", photo)
  }

  setSociedad(name){
    localStorage.setItem("sociedad", name);
  }

  getSociedad(){
    return localStorage.getItem("sociedad")
  }

  getLanguage(){
    return localStorage.getItem("language")
  }

  setLanguage(language){
    localStorage.setItem("language", language);
  }

  getAnonimo(){
    return localStorage.getItem("anonimo")
  }

  setAnonimo(anonimo){
    localStorage.setItem("anonimo", anonimo);
  }

  setNremitente(nremitente){
    localStorage.setItem("nremitente", nremitente);
  }

  setRemitente(remitente){
    localStorage.setItem("remitente", remitente);
  }

  setSrv_mail(srv_mail){
    localStorage.setItem("srv_mail", srv_mail);
  }

  setPuerto(puerto){
    localStorage.setItem("puerto", puerto);
  }

  setUsr_mail(usr_mail){
    localStorage.setItem("usr_mail", usr_mail);
  }

  setPass_mail(pass_mail){
    localStorage.setItem("pass_mail", pass_mail);
  }

  setSsl(ssl){
    localStorage.setItem("ssl", ssl);
  }

  setAuth_mail(auth_mail){
    localStorage.setItem("auth_mail", auth_mail);
  }

  setColorprincipal(colorprincipal){
    localStorage.setItem("colorprincipal", colorprincipal);
  }

  setColorsecundario(colorsecundario){
    localStorage.setItem("colorsecundario", colorsecundario);
  }

  setColorbgseccion1(colorbgseccion1){
    localStorage.setItem("colorbgseccion1", colorbgseccion1);
  }

  setColormenulateral(colormenulateral){
    localStorage.setItem("colormenulateral", colormenulateral);
  }

  setColortxtcabeceras(colortxtcabeceras){
    localStorage.setItem("colortxtcabeceras", colortxtcabeceras);
  }

  setColortxtbotones(colortxtbotones){
    localStorage.setItem("colortxtbotones", colortxtbotones);
  }

  setColorbgseccion2(colorbgseccion2){
    localStorage.setItem("colorbgseccion2", colorbgseccion2);
  }

  setColorbgseccion3(colorbgseccion3){
    localStorage.setItem("colorbgseccion3", colorbgseccion3);
  }

  setColortxtbtn(colortxtbtn){
    localStorage.setItem("colortxtbtn", colortxtbtn);
  }

  setColortxtseccion1(colortxtseccion1){
    localStorage.setItem("colortxtseccion1", colortxtseccion1);
  }

  setColortxtseccion2(colortxtseccion2){
    localStorage.setItem("colortxtseccion2", colortxtseccion2);
  }

  setColortxtseccion3(colortxtseccion3){
    localStorage.setItem("colortxtseccion3", colortxtseccion3);
  }

  setColortxttitulo(colortxttitulo){
    localStorage.setItem("colortxttitulo", colortxttitulo);
  }

  getConsultas(){
    return localStorage.getItem("consultas")
  }

  setConsultas(consultas){
    localStorage.setItem("consultas", consultas);
  }

  getAviso(){
    return localStorage.getItem("aviso")
  }

  getClausulas(){
    return localStorage.getItem("clausulas")
  }

  getConflicto(){
    return localStorage.getItem("conflicto")
  }

  getDiasInves(){
    return localStorage.getItem("diasinves")
  }

  getDiasDecisor(){
    return localStorage.getItem("diasdecisor")
  }

  getDiasCompliance(){
    return localStorage.getItem("diascompliance")
  }

  setAviso(aviso){
    localStorage.setItem("aviso", aviso);
  }

  setClausulas(clausulas){
    localStorage.setItem("clausulas", clausulas);
  }

  setConflicto(conflicto){
    localStorage.setItem("conflicto", conflicto);
  }

  setDiasInves(diasinves){
    localStorage.setItem("diasinves", diasinves);
  }

  setDiasDecisor(diasdecisor){
    localStorage.setItem("diasdecisor", diasdecisor);
  }

  setDiasCompliance(diascompliance){
    localStorage.setItem("diascompliance", diascompliance);
  }

  setTerminos(terminos){
    localStorage.setItem("terminos", terminos);
  }

  setDocTerminos(docterminos){
    localStorage.setItem("docterminos", docterminos);
  }

  setRuta(ruta){
    localStorage.setItem("ruta", ruta);
  }

  setDiasverdenuncia(diasverdenuncia){
    localStorage.setItem("diasverdenuncia", diasverdenuncia);
  }


  setId_texto(id_texto){
    localStorage.setItem("id_texto", id_texto);
  }

  setTexto(texto){
    localStorage.setItem("texto", texto);
  }

  setId_clausula(id_clausula){
    localStorage.setItem("id_clausula", id_clausula);
  }

  setClausula(clausula){
    localStorage.setItem("clausula", clausula);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.baseUrl}/api/login`, { username, password }, { withCredentials: true })
        .pipe(map(user => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
}

  apilogout() {
      this.http.post<any>(`${environment.baseUrl}/users/revoke-token`, {}, { withCredentials: true }).subscribe();
      this.stopRefreshTokenTimer();
      this.userSubject.next(null);
      this.router.navigate(['/login']);
  }


  refreshToken() {
    return this.http.post<any>(`${environment.baseUrl}/users/refresh-token`, {}, { withCredentials: true })
        .pipe(map((user) => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
  }


    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

    */
}
