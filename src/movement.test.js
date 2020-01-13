const movement = require("./movement");


describe("movement", () => {
  it("should return correct updatedState when motion is detected", () => {
    const currentState = [
        {
            mainCorridor: [
                {
                    lights: [{ count: 1, status: "ON" }],
                    ACs: [{ count: 1, status: "ON" }]
                }
            ],
            subCorridor: [
                {
                    lights: [{ count: 1, status: "OFF" }],
                    ACs: [{ count: 1, status: "ON" }]
                },
                {
                    lights: [{ count: 2, status: "OFF" }],
                    ACs: [{ count: 2, status: "ON" }]
                }
            ]
        },
        {
            mainCorridor: [
                {
                    lights: [{ count: 1, status: "ON" }],
                    ACs: [{ count: 1, status: "ON" }]
                }
            ],
            subCorridor: [
                {
                    lights: [{ count: 1, status: "OFF" }],
                    ACs: [{ count: 1, status: "ON" }]
                },
                {
                    lights: [{ count: 2, status: "OFF" }],
                    ACs: [{ count: 2, status: "ON" }]
                }
            ]
        }
    ];
    const updatedState = movement(currentState, 1, 1, 'subCorridor');
      const expected = [
          {
              mainCorridor: [
                  {
                      lights: [{ count: 1, status: "ON" }],
                      ACs: [{ count: 1, status: "ON" }]
                  }
              ],
              subCorridor: [
                  {
                      lights: [{ count: 1, status: "ON" }],
                      ACs: [{ count: 1, status: "ON" }]
                  },
                  {
                      lights: [{ count: 2, status: "OFF" }],
                      ACs: [{ count: 2, status: "ON" }]
                  }
              ]
          },
          {
              mainCorridor: [
                  {
                      lights: [{ count: 1, status: "ON" }],
                      ACs: [{ count: 1, status: "ON" }]
                  }
              ],
              subCorridor: [
                  {
                      lights: [{ count: 1, status: "OFF" }],
                      ACs: [{ count: 1, status: "ON" }]
                  },
                  {
                      lights: [{ count: 2, status: "OFF" }],
                      ACs: [{ count: 2, status: "ON" }]
                  }
              ]
          }
      ];
      
    expect(updatedState).toEqual(expected);
  });
});
