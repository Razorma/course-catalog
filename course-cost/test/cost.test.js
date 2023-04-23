describe("courseCost function", function() {

    it("should return give 40% discount for course starting between the 20 and 25th of the month", function(){
        const pythonDiscount = courseCost("p1", "2023-05-21")
        assert.equal(3140, pythonDiscount.discount) // 
    });
    it("should return give 20% discount for a course starting between the 10th and 15th of the month", function(){
        const PHPDiscount = courseCost("p2", "2023-05-13")
        assert.equal(1798, PHPDiscount.discount) // 
    });
    it("should return 7850 for python course", function(){
        const cost = courseCost("p1", "2023-05-21")
        assert.equal(7850, cost.cost) // 
    });
    it("should return 8990 for Intro to PHP course", function(){
        const cost = courseCost("p2", "2023-05-21")
        assert.equal(8990, cost.cost) // 
    });
    it("should return 5675 for python course", function(){
        const cost = courseCost("r1", "2023-05-21")
        assert.equal(5675, cost.cost) // 
    });
    it("should return invalid code if course code is invalid", function(){
        const Course = courseCost("y1", "2023-05-21")
        assert.equal(Course.status, "Invalid code") // 
    });
    it("invalid dates should return a status of: `Invalid day`", function(){
        const Course = courseCost("r1", "2023-05-32")
        assert.equal(Course.status, "Invalid day") // 
    });
})