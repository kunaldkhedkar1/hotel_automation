const getDefaultState = require("./defaultState");
const corridoorConfMapping = require("./corridoorConfMapping");
const hotelInfo = require('./hotelInfo');

describe("getdefaultState", () => {
  it("should return correct defaultState", () => {
    const defaultState = getDefaultState(
      hotelInfo.noOfFLoors,
      corridoorConfMapping
    );
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
    expect(defaultState).toEqual(expected);
  });
});
