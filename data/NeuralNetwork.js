class NeuralNetwork {
    constructor(inputC, hiddenC, outpuC) {
        this.size = {input: inputC, hidden: hiddenC, output: outpuC};
        this.perceptrons = [];
        this.hiddenP = [];
        this.outputP = [];
        for (let i = 0; i < hiddenC; i++) {
            let p = new Perceptron(inputC+1); //+1 for the bias
            this.hiddenP.push(p);       
        }
        for (let i = 0; i < outputC; i++) {
            let p = new Perceptron(hiddenC+1); //+1 for the bias
            this.outputP.push(p);
        }
        this.perceptrons.push(this.hiddenP);
        this.perceptrons.push(this.outputP);
    }

    feedForward(inputs){
        let hiddenOutputs = [];
        let returnV = [];
        for (let i = 0; i < this.size.hidden; i++) {
            hiddenOutputs.push(this.perceptrons[0].fire(inputs));
        }
        for (let i = 0; i < this.size.output; i++) {
            returnV.push(this.perceptrons[1].fire(hiddenOutputs));
        }
        return returnV;
    }
}