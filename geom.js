

let B = Number(document.getElementById('input1').value)
let C = Number(document.getElementById('input2').value)
let x1
let x2
let D
let vm = new Vue({
    el: "#plot" ,
    data: {
        D:0,
        x1: 0,
        x2: 0,
        B:-1,
        C:0.25 ,

    
    },
    computed:{
        schet:function(){
            D = Math.pow(this.B,2) - 4 * this.C
            return D
        },
        schet2:function(){
            let n = ""
            if(D>0){
                       x1 = (-this.B-Math.sqrt(D))/2
                       x2 = (-this.B+Math.sqrt(D))/2
                      return n = "x1 = " + x1 + " x2 = " + x2
                      
                    }else if(D<0){
                        x1 = ""
                        x2 = ""
                        return n = " нет корней"
                        
                    }else if(D == 0){
                        x1 = -(this.B/2)
                        x2 = ""
                        return n = "x = " + x1
                        
                    }
        }
        // schet2:function(){
            
        //     if(D>0){
        //        x1 = (-this.B-Math.sqrt(D))/2
              
        //       return x1 
              
        //     }else if(D<0){
        //         x1 = "нет"
                
        //         return x1
        //     }else if(D == 0){
        //         x1 = -(this.B/2)
                
               
        //         return x1 
        //     }
           
        // },
        // schet3:function(){
        //     if(D>0){
                
        //        x2 = (-this.B+Math.sqrt(D))/2
        //        return x2
               
        //      }else if(D<0){
                
        //         x2 = "нет"
        //         return x2
        //     }else if(D == 0){
                
        //         x2 = "нет"
                
        //         return x2
        //     }
        // }
        
        
    }
    
    })
    

    functionPlot({
        target:"#plot",
        data:[{
            fn:"x^2 + (b) * x + (c)",
            scope:{
                b:B,
                c:C,
    
            },
        },
    ],
    grid:true,
    })