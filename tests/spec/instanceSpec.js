describe("Instance spec", function() {
  var inputSelectBinder;

  it("New instance with valid properties should return valid inputSelectBinder object.", function() {
    var sampleObj = {
      config: {
        inputs: [
          document.getElementById("vegetable1"),
          document.getElementById("vegetable2"),
          document.getElementById("vegetable3"),
          document.getElementById("vegetable4"),
        ],
        target: document.getElementById("favoriteVegetableContainer"),
        listAttr: {
          id: "favoriteVegetable"
        }
      },
      inputVals: {
        0: document.getElementById("vegetable1").value,
        1: document.getElementById("vegetable2").value,
        2: document.getElementById("vegetable3").value,
        3: document.getElementById("vegetable4").value
      }
    };

    var inst = new InputSelectBinder({
      inputs: [
        document.getElementById("vegetable1"),
        document.getElementById("vegetable2"),
        document.getElementById("vegetable3"),
        document.getElementById("vegetable4"),
      ],
      listAttr: {
        id: "favoriteVegetable"
      },
      target: document.getElementById("favoriteVegetableContainer")
    });

    Object.setPrototypeOf(sampleObj, Object.getPrototypeOf(inst));

    expect(inst).toEqual(sampleObj);
  });

  it("New instance without config object should throw error.", function() {
    expect(function() { new InputSelectBinder() }).toThrowError();
  })

  it("New instance without \"target\" property in config object should throw error.", function() {
    expect(function() {
      new InputSelectBinder({
            inputs: [
              document.getElementById("vegetable1"),
              document.getElementById("vegetable2"),
              document.getElementById("vegetable3"),
              document.getElementById("vegetable4"),
            ],
            listAttr: {
              id: "favoriteVegetable"
            }
          });
    }).toThrowError();
  })

  it("New instance without \"inputs\" property in config object should throw error.", function() {
    expect(function() {
      new InputSelectBinder({
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      });
    }).toThrowError();
  })

  it("New instance without \"listAttr\" property in config object should not throw error and should return valid inputSelectBinder object.", function() {
    var sampleObj = {
      config: {
        inputs: [
          document.getElementById("vegetable1"),
          document.getElementById("vegetable2"),
          document.getElementById("vegetable3"),
          document.getElementById("vegetable4"),
        ],
        target: document.getElementById("favoriteVegetableContainer"),
      },
      inputVals: {
        0: document.getElementById("vegetable1").value,
        1: document.getElementById("vegetable2").value,
        2: document.getElementById("vegetable3").value,
        3: document.getElementById("vegetable4").value
      }
    };

    var inst = new InputSelectBinder({
      inputs: [
        document.getElementById("vegetable1"),
        document.getElementById("vegetable2"),
        document.getElementById("vegetable3"),
        document.getElementById("vegetable4"),
      ],
      target: document.getElementById("favoriteVegetableContainer")
    });

    Object.setPrototypeOf(sampleObj, Object.getPrototypeOf(inst));

    expect(inst).toEqual(sampleObj);
  })

  it("New instance with invalid type \"target\" property in config object should throw error.", function() {
    expect(function() {
      new InputSelectBinder({
            inputs: [
              document.getElementById("vegetable1"),
              document.getElementById("vegetable2"),
              document.getElementById("vegetable3"),
              document.getElementById("vegetable4"),
            ],
            listAttr: {
              id: "favoriteVegetable"
            },
            target: "favoriteVegetableContainer"
          });
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
            inputs: [
              document.getElementById("vegetable1"),
              document.getElementById("vegetable2"),
              document.getElementById("vegetable3"),
              document.getElementById("vegetable4"),
            ],
            listAttr: {
              id: "favoriteVegetable"
            },
            target: 123
          });
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
            inputs: [
              document.getElementById("vegetable1"),
              document.getElementById("vegetable2"),
              document.getElementById("vegetable3"),
              document.getElementById("vegetable4"),
            ],
            listAttr: {
              id: "favoriteVegetable"
            },
            target: document.getElementById("nonExistentDiv")
          });
    }).toThrowError();
  })

  it("New instance with invalid type \"inputs\" property in config object should throw error.", function() {
    expect(function() {
      new InputSelectBinder({
        inputs: {
          0: document.getElementById("vegetable1"),
          1: document.getElementById("vegetable2"),
          2: document.getElementById("vegetable3"),
          3: document.getElementById("vegetable4"),
        },
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      })
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
        inputs: document.getElementById("vegetable1"),
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      })
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
        inputs: "vegetable1",
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      })
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
        inputs: ["vegetable1", "vegetable2", "vegetable3", "vegetable4"],
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      })
    }).toThrowError();

    expect(function() {
      new InputSelectBinder({
        inputs: [document.getElementById("vegetable1"), document.getElementById("vegetable2"), document.getElementById("vegetable3"), "vegetable4"],
        listAttr: {
          id: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      })
    }).toThrowError();
  })

  it("New instance with valid properties in \"listAttr\" object should return valid inputSelectBinder object.", function() {
    var sampleObj = {
      config: {
        inputs: [
          document.getElementById("vegetable1"),
          document.getElementById("vegetable2"),
          document.getElementById("vegetable3"),
          document.getElementById("vegetable4"),
        ],
        target: document.getElementById("favoriteVegetableContainer"),
        listAttr: {
          id: "favoriteVegetable",
          cssClass: "select-list-form",
          "data-id": 1
        }
      },
      inputVals: {
        0: document.getElementById("vegetable1").value,
        1: document.getElementById("vegetable2").value,
        2: document.getElementById("vegetable3").value,
        3: document.getElementById("vegetable4").value
      }
    };

    var inst = new InputSelectBinder({
      inputs: [
        document.getElementById("vegetable1"),
        document.getElementById("vegetable2"),
        document.getElementById("vegetable3"),
        document.getElementById("vegetable4"),
      ],
      listAttr: {
        id: "favoriteVegetable",
        cssClass: "select-list-form",
        "data-id": 1
      },
      target: document.getElementById("favoriteVegetableContainer")
    });

    Object.setPrototypeOf(sampleObj, Object.getPrototypeOf(inst));

    expect(inst).toEqual(sampleObj);
  })

  it("New instance with \"class\" property in property \"listAttr\" in config object should throw error.", function() {
    expect(function() {
      new InputSelectBinder({
        inputs: [
          document.getElementById("vegetable1"),
          document.getElementById("vegetable2"),
          document.getElementById("vegetable3"),
          document.getElementById("vegetable4"),
        ],
        listAttr: {
          class: "favoriteVegetable"
        },
        target: document.getElementById("favoriteVegetableContainer")
      });
    }).toThrowError();
  })
})
