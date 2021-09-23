function calc() {
    let last = '2021/10/8'
    let oneDay = 1000 * 60 * 60 * 24;
    let wageDay = (new Date(last).getTime() - new Date(new Date().toLocaleDateString()).getTime()) / oneDay
    
    console.log(`还有${wageDay}天准备`);
}
calc()