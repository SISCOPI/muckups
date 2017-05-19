/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pruebas;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

/**
 *
 * @author maricela
 */
public class Evaluaciones {
    
    ArrayList <Asignatura> aAsignaturas= new ArrayList <>();
    int id=1;
    int grupo=1;
    String[] nasignaturas;
    String[] aulas;
    int ngrupos1=3;
    int ngrupos2=5;
    int ngrupos3=1;

    public Evaluaciones() {
        this.nasignaturas = new String[]{"Taller de investigacion I","Taller de Investigación II","Formulación y evaluacion de proyectos"};
        this.aulas = new String[]{"A1","A2","B1", "B2", "B3","C1","C2","C3"};
    }
    public void cargaAsignaturas(){
        
        
    }
    public ArrayList<Horario> horarios(){
        ArrayList<Horario> horarios=new ArrayList<>();
        Horario horario=new Horario();
        for(int i=1;i<=ngrupos1;i++){
            horario.setDia(i);
  //          horario.setHoraA(horaA);
            
        }
        return null;
    }
     public static void main(String[] args){
      try( //El constructor de BufferedReader no admite directamente un archivo
        //por eso usamos FileReader
              BufferedReader reader = new BufferedReader(new FileReader("D:\\SISCOPI\\muckups\\siscopi\\src\\java\\pruebas\\horas.txt"))) {
        
         //Vamos ahora a convertir el reader en un ArrayList.
         //  Nunca inicializéis String linea = reader.readLine() o dentro de 
         //  while se producirá un bucle infinito (puesto que linea nunca será nul
         String linea;
         List<String> arlist = new ArrayList<>();
         
         while((linea=reader.readLine())!= null){ 
            arlist.add(linea);
          } 
            System.out.println(arlist);
          
        //Si ahora quisiésemos convertir ese ArrayList en un Array,
        //  haremos lo siguiente
         String[] s1 = arlist.toArray(new String[arlist.size()]);
          
 
        //Para separar el texto en dos array distintos
          String[] palabras;
//          String[] definiciones;
          for (String st : arlist){
             Pattern  patron = Pattern.compile("[(].+$");
             palabras = patron.split(st);
             System.out.println(palabras[0]);
             }
//           for (String str : arlist){
//             Pattern patrón2 = Pattern.compile("[\\w]+:");
//             definiciones = patrón2.split(str);
//               System.out.println("///");
//             System.out.println(definiciones[1]);
//            }
            //Nunca olvidéis cerrar el BufferedReader.

         
       }catch(IOException ioe){
         System.out.println(ioe.getMessage());
       }catch(PatternSyntaxException pse){
         System.out.println("Oh,ohpattern");
       }
     }
}
