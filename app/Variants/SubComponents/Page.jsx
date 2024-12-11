import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Page() {
    const monthsWithDays = [
      { name: 'January', numberOfDays: 31 },
      { name: 'February', numberOfDays: 28 },  // Leap years can have 29
      { name: 'March', numberOfDays: 31 },
      { name: 'April', numberOfDays: 30 },
      { name: 'May', numberOfDays: 31 },
      { name: 'June', numberOfDays: 30 },
      { name: 'July', numberOfDays: 31 },
      { name: 'August', numberOfDays: 31 },
      { name: 'September', numberOfDays: 30 },
      { name: 'October', numberOfDays: 31 },
      { name: 'November', numberOfDays: 30 },
      { name: 'December', numberOfDays: 31 }
    ];
  
    return (
      <View>
        {monthsWithDays.map((element, monthIndex) => (
          <View key={monthIndex} className="mb-4">
            <Text className="font-bold mb-2">{element.name}</Text>
            {/* Using for loop */}
            <View className="flex flex-wrap w-[40vw]">
              {(() => {
                let dayElements = [];
                for (let i = 1; i <= element.numberOfDays; i++) {
                  dayElements.push(
                    <View
                      key={i}
                      className="w-[11.4vw] h-[4vh] border-r border-r-slate-200 mr-2"
                    >
                      <Text className="text-center font-extralight text-2xl mt-2">{i}</Text>
                    </View>
                  );
                }
                return dayElements;
              })()}
            </View>
          </View>
        ))}
      </View>
    );
  };
  