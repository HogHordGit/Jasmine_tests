describe("Тестирование функции ageClassification(num)",() => {

    it("Проверим num = -1, должно вернуть null",() => {
        expect(ageClassification(-1)).toBe(null);
    });

    it("Проверим num = 1, должно вернуть 'детский возраст'",() => {
        expect(ageClassification(1)).toBe("детский возраст");
    });

    it("Проверим num = 24, должно вернуть 'детский возраст'",() => {
        expect(ageClassification(24)).toBe("детский возраст");
    });

    it("Проверим num = 24.01, должно вернуть 'молодой возраст'",() => {
        expect(ageClassification(24.01)).toBe("молодой возраст");
    });

    it("Проверим num = 44, должно вернуть 'молодой возраст'",() => {
        expect(ageClassification(44)).toBe("молодой возраст");
    });

    it("Проверим num = 44.01, должно вернуть 'cредний возраст'",() => {
        expect(ageClassification(44.01)).toBe("средний возраст");
    });

    it("Проверим num = 65 , должно вернуть 'cредний возраст'",() => {
        expect(ageClassification(65)).toBe("средний возраст");
    });

    it("Проверим num = 65.1, должно вернуть 'пожилой возраст'",() => {
        expect(ageClassification(65.1)).toBe("пожилой возраст");
    });

    it("Проверим num = 75, должно вернуть 'пожилой возраст'",() => {
        expect(ageClassification(75)).toBe("пожилой возраст");
    });

    it("Проверим num = 75.01, должно вернуть 'старческий возраст'",() => {
        expect(ageClassification(75.01)).toBe("старческий возраст");
    });

    it("Проверим num = 90 , должно вернуть 'старческий возраст'",() => {
        expect(ageClassification(90)).toBe("старческий возраст");
    });

    it("Проверим num = 90.01, должно вернуть 'долгожители'",() => {
        expect(ageClassification(90.01)).toBe("долгожители");
    });

    it("Проверим num = 122, должно вернуть 'долгожители'",() => {
        expect(ageClassification(122)).toBe("долгожители");
    });

    it("Проверим num = 122.01  должно вернуть null",() => {
        expect(ageClassification(122.01)).toBe(null);
    });
});

describe("Тестирование функции weekFn(num)",() => {

    it("Проверим num = 1, должно вернуть 'Понедельник'",() => {
        expect(weekFn(1)).toBe('Понедельник');
    });

    it("Проверим num = 3, должно вернуть 'Среда'",() => {
        expect(weekFn(3)).toBe('Среда');
    });

    it("Проверим num = 7, должно вернуть 'Воскресенье'",() => {
        expect(weekFn(7)).toBe('Воскресенье');
    });

    it("Проверим num = 9, должно вернуть null",() => {
        expect(weekFn(9)).toBe(null);
    });

    it("Проверим num = 1.5, должно вернуть null",() => {
        expect(weekFn(1.5)).toBe(null);
    });

    it("Проверим num = '2', должно вернуть null",() => {
        expect(weekFn("2")).toBe(null);
    });
});


