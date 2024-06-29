import java.util.Scanner;

public class Array{
	
private int [] vetor;
private int tamanho;	
	
Array(int tamanho){
	this.setTamanho(tamanho);
	vetor = new int[this.getTamanho()];
}	
	
public void setTamanho(int tamanho){
	this.tamanho = tamanho;
}	
	
public int getTamanho(){
	return this.tamanho;
}	
	
public void setElemento(int index , int numero){
	this.vetor[index] = numero;
}	
	
public int getElemento(int index){
	return this.vetor[index];
}	
	
public void Metodo(Scanner input){
	
int contaPar=0,contaInpa = 0;
    for(int i = 0 ; i < this.getTamanho() ; i ++){

	this.setElemento(i , input.nextInt());
	System.out.println(this.getElemento(i));

    }

    System.out.println("saida 1"+ contaPar);
    System.out.println("saida 2" + contaInpa);

}


public static void main(String[] args){
	
Scanner input = new Scanner(System.in);
int valorLeitura1 = input.nextInt();
Array objeto = new Array(valorLeitura1);	
objeto.Metodo(input);	
	}	
}