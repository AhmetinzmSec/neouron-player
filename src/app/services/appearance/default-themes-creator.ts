import { Injectable } from '@angular/core';
import { Theme } from './theme/theme';
import { ThemeCoreColors } from './theme/theme-core-colors';
import { ThemeCreator } from './theme/theme-creator';
import { ThemeNeutralColors } from './theme/theme-neutral-colors';
import { ThemeOptions } from './theme/theme-options';

@Injectable()
export class DefaultThemesCreator {
    private creator: ThemeCreator = new ThemeCreator('hackadia', 'hackadia@outlook.com');

    public createAllThemes(): Theme[] {
        const themes: Theme[] = [];
        themes.push(this.createNeuronTheme());
        themes.push(this.createNHTheme());
        themes.push(this.createZuneTheme());
        themes.push(this.createBeatsTheme());
        themes.push(this.createNaughtyTheme());
        themes.push(this.createUbuntuTheme());
        themes.push(this.createCatppuccinTheme());
        themes.push(this.createGruvboxTheme());
        themes.push(this.createCatppuccinMojaveTheme());

        return themes;
    }

    private createNeuronTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#5e5e5e', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#666', // tabText
            '#fff', // selectedTabText
            '#101013', // mainBackground
            '#131316', // headerBackground
            '#131316', // footerBackground
            '#131316', // sidePaneBackground
            '#fff', // primaryText
            '#5e5e5e', // secondaryText
            '#272727', // breadcrumbBackground
            '#999', // sliderBackground
            '#fff', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            'transparent', // paneSeparators
            '#363636', // settingsSeparators
            '#363636', // contextMenuSeparators
            '#4883e0', // scrollBars
            '#202020', // searchBox
            '#fff', // searchBoxText
            '#5e5e5e', // searchBoxIcon
            '#131316', // dialogBackground
            '#fff', // primaryButtonText
            '#585858', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#838383', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#909090', // tabText
            '#000', // selectedTabText
            '#f5f5f5', // mainBackground
            '#fdfdfd', // headerBackground
            '#fdfdfd', // footerBackground
            '#efefef', // sidePaneBackground
            '#000', // primaryText
            '#838383', // secondaryText
            '#dfdfdf', // breadcrumbBackground
            '#666', // sliderBackground
            '#000', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            'transparent', // paneSeparators
            '#d7d7d7', // settingsSeparators
            '#d7d7d7', // contextMenuSeparators
            '#4883e0', // scrollBars
            '#dfdfdf', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fdfdfd', // dialogBackground
            '#fff', // primaryButtonText
            '#e0e0e0', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(false);

        return new Theme('Neuron Default', this.creator, new ThemeCoreColors('#6260e3', '#3fdcdd', '#4883e0'), darkColors, lightColors, options);
    }

    private createNHTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#5e5e5e', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#666', // tabText
            '#fff', // selectedTabText
            '#110f0e', // mainBackground
            '#131110dd', // headerBackground
            '#131110dd', // footerBackground
            '#131110dd', // sidePaneBackground
            '#fff', // primaryText
            '#5e5e5e', // secondaryText
            '#272727', // breadcrumbBackground
            '#999', // sliderBackground
            '#fff', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            'transparent', // paneSeparators
            '#363636', // settingsSeparators
            '#363636', // contextMenuSeparators
            '#4883e0', // scrollBars
            '#202020', // searchBox
            '#fff', // searchBoxText
            '#5e5e5e', // searchBoxIcon
            '#131110dd', // dialogBackground
            '#fff', // primaryButtonText
            '#585858', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#838383', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#909090', // tabText
            '#000', // selectedTabText
            '#f5f5f5', // mainBackground
            '#fdfdfd', // headerBackground
            '#fdfdfd', // footerBackground
            '#efefef', // sidePaneBackground
            '#000', // primaryText
            '#838383', // secondaryText
            '#dfdfdf', // breadcrumbBackground
            '#666', // sliderBackground
            '#000', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            'transparent', // paneSeparators
            '#d7d7d7', // settingsSeparators
            '#d7d7d7', // contextMenuSeparators
            '#4883e0', // scrollBars
            '#dfdfdf', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fdfdfd', // dialogBackground
            '#fff', // primaryButtonText
            '#e0e0e0', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(false);

        return new Theme('Neuron Halloween', this.creator, new ThemeCoreColors('#db6724', '#110f0e', '#ca5f21'), darkColors, lightColors, options);
    }

    private createZuneTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#5e5e5e', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#666', // tabText
            '#fff', // selectedTabText
            '#1a1a1a', // mainBackground
            '#111', // headerBackground
            '#111', // footerBackground
            '#171717', // sidePaneBackground
            '#fff', // primaryText
            '#5e5e5e', // secondaryText
            '#272727', // breadcrumbBackground
            '#999', // sliderBackground
            '#fff', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            'transparent', // paneSeparators
            '#363636', // settingsSeparators
            '#363636', // contextMenuSeparators
            '#f0266f', // scrollBars
            '#202020', // searchBox
            '#fff', // searchBoxText
            '#5e5e5e', // searchBoxIcon
            '#111', // dialogBackground
            '#fff', // primaryButtonText
            '#585858', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#838383', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#909090', // tabText
            '#000', // selectedTabText
            '#f5f5f5', // mainBackground
            '#fdfdfd', // headerBackground
            '#fdfdfd', // footerBackground
            '#efefef', // sidePaneBackground
            '#000', // primaryText
            '#838383', // secondaryText
            '#dfdfdf', // breadcrumbBackground
            '#666', // sliderBackground
            '#000', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            'transparent', // paneSeparators
            '#d7d7d7', // settingsSeparators
            '#d7d7d7', // contextMenuSeparators
            '#f0266f', // scrollBars
            '#dfdfdf', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fdfdfd', // dialogBackground
            '#fff', // primaryButtonText
            '#e0e0e0', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(false);

        return new Theme('Zune', this.creator, new ThemeCoreColors('#f78f1e', '#ed008c', '#f0266f'), darkColors, lightColors, options);
    }

    private createBeatsTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#5e5e5e', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#666', // tabText
            '#fff', // selectedTabText
            '#1a1a1a', // mainBackground
            '#111', // headerBackground
            '#111', // footerBackground
            '#171717', // sidePaneBackground
            '#fff', // primaryText
            '#5e5e5e', // secondaryText
            '#272727', // breadcrumbBackground
            '#999', // sliderBackground
            '#fff', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            'transparent', // paneSeparators
            '#363636', // settingsSeparators
            '#363636', // contextMenuSeparators
            '#e21839', // scrollBars
            '#202020', // searchBox
            '#fff', // searchBoxText
            '#5e5e5e', // searchBoxIcon
            '#111', // dialogBackground
            '#fff', // primaryButtonText
            're#585858d', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#838383', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#909090', // tabText
            '#000', // selectedTabText
            '#f5f5f5', // mainBackground
            '#fdfdfd', // headerBackground
            '#fdfdfd', // footerBackground
            '#efefef', // sidePaneBackground
            '#000', // primaryText
            '#838383', // secondaryText
            '#dfdfdf', // breadcrumbBackground
            '#666', // sliderBackground
            '#000', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            'transparent', // paneSeparators
            '#d7d7d7', // settingsSeparators
            '#d7d7d7', // contextMenuSeparators
            '#f0266f', // scrollBars
            '#dfdfdf', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fdfdfd', // dialogBackground
            '#fff', // primaryButtonText
            '#e0e0e0', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(false);

        return new Theme('Beats', this.creator, new ThemeCoreColors('#98247f', '#e21839', '#e21839'), darkColors, lightColors, options);
    }

    private createNaughtyTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#5e5e5e', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#666', // tabText
            '#fff', // selectedTabText
            '#1a1a1a', // mainBackground
            '#111', // headerBackground
            '#111', // footerBackground
            '#171717', // sidePaneBackground
            '#fff', // primaryText
            '#5e5e5e', // secondaryText
            '#272727', // breadcrumbBackground
            '#999', // sliderBackground
            '#fff', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            'transparent', // paneSeparators
            '#363636', // settingsSeparators
            '#363636', // contextMenuSeparators
            '#4883e0', // scrollBars
            '#202020', // searchBox
            '#fff', // searchBoxText
            '#5e5e5e', // searchBoxIcon
            '#111', // dialogBackground
            '#fff', // primaryButtonText
            '#585858', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            '#838383', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#909090', // tabText
            '#000', // selectedTabText
            '#f5f5f5', // mainBackground
            '#fdfdfd', // headerBackground
            '#fdfdfd', // footerBackground
            '#efefef', // sidePaneBackground
            '#000', // primaryText
            '#838383', // secondaryText
            '#dfdfdf', // breadcrumbBackground
            '#666', // sliderBackground
            '#000', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            'transparent', // paneSeparators
            '#d7d7d7', // settingsSeparators
            '#d7d7d7', // contextMenuSeparators
            '#f0266f', // scrollBars
            '#dfdfdf', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fdfdfd', // dialogBackground
            '#fff', // primaryButtonText
            '#e0e0e0', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(false);

        return new Theme('Naughty', this.creator, new ThemeCoreColors('#f5004a', '#9300ef', '#f5004a'), darkColors, lightColors, options);
    }

    private createUbuntuTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            'white', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#7b7b7b', // tabText
            'white', // selectedTabText
            '#2c2c2c', // mainBackground
            '#272727', // headerBackground
            '#272727', // footerBackground
            '#272727', // sidePaneBackground
            'white', // primaryText
            '#7b7b7b', // secondaryText
            '#373737', // breadcrumbBackground
            '#999', // sliderBackground
            'white', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#202020', // albumCoverBackground
            '#151515', // paneSeparators
            '#151515', // settingsSeparators
            '#151515', // contextMenuSeparators
            '#7d7d7d', // scrollBars
            '#373737', // searchBox
            '#fff', // searchBoxText
            '#fff', // searchBoxIcon
            '#272727', // dialogBackground
            '#fff', // primaryButtonText
            '#595959', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            'black', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#8c8c8c', // tabText
            'black', // selectedTabText
            'white', // mainBackground
            '#fafafa', // headerBackground
            '#fafafa', // footerBackground
            '#fafafa', // sidePaneBackground
            'black', // primaryText
            '#8c8c8c', // secondaryText
            '#e9e9e9', // breadcrumbBackground
            '#666', // sliderBackground
            'black', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            '#dadada', // paneSeparators
            '#dadada', // settingsSeparators
            '#dadada', // contextMenuSeparators
            '#b1b1b1', // scrollBars
            '#e9e9e9', // searchBox
            'black', // searchBoxText
            'black', // searchBoxIcon
            '#fafafa', // dialogBackground
            '#fff', // primaryButtonText
            '#e1e1e1', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(true);

        return new Theme('Ubuntu', this.creator, new ThemeCoreColors('#d94612', '#f9622d', '#e95420'), darkColors, lightColors, options);
    }


    private createGruvboxTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            'white', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#818181', // tabText
            'white', // selectedTabText
            '#242424', // mainBackground
            '#282828', // headerBackground
            '#282828', // footerBackground
            '#282828', // sidePaneBackground
            'white', // primaryText
            '#818181', // secondaryText
            '#373737', // breadcrumbBackground
            '#999', // sliderBackground
            'white', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#272727', // albumCoverBackground
            '#1b1b1b', // paneSeparators
            '#1b1b1b', // settingsSeparators
            '#1b1b1b', // contextMenuSeparators
            '#7a7a79', // scrollBars
            '#242424', // searchBox
            '#fff', // searchBoxText
            '#fff', // searchBoxIcon
            '#282828', // dialogBackground
            '#fff', // primaryButtonText
            '#595959', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            'black', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#838383', // tabText
            'black', // selectedTabText
            'white', // mainBackground
            '#fafafa', // headerBackground
            '#fafafa', // footerBackground
            '#fafafa', // sidePaneBackground
            'black', // primaryText
            '#838383', // secondaryText
            '#e7e7e7', // breadcrumbBackground
            '#666', // sliderBackground
            'black', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            '#c7c7c7', // paneSeparators
            '#c7c7c7', // settingsSeparators
            '#c7c7c7', // contextMenuSeparators
            '#abaeaf', // scrollBars
            '#e7e7e7', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fafafa', // dialogBackground
            '#fff', // primaryButtonText
            '#e1e1e1', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(true);

        return new Theme('Gruvbox', this.creator, new ThemeCoreColors('#3c3836', '#504945', '#665c54'), darkColors, lightColors, options);

    }


    private createCatppuccinMojaveTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            'white', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#818181', // tabText
            'white', // selectedTabText
            '#26243a', // mainBackground
            '#1d1c2c', // headerBackground
            '#1d1c2c', // footerBackground
            '#1d1c2c', // sidePaneBackground
            'white', // primaryText
            '#818181', // secondaryText
            '#373737', // breadcrumbBackground
            '#999', // sliderBackground
            'white', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#272727', // albumCoverBackground
            '#1b1b1b', // paneSeparators
            '#1b1b1b', // settingsSeparators
            '#1b1b1b', // contextMenuSeparators
            '#7a7a79', // scrollBars
            '#25243a', // searchBox
            '#fff', // searchBoxText
            '#fff', // searchBoxIcon
            '#1b1923', // dialogBackground
            '#fff', // primaryButtonText
            '#595959', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            'black', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#838383', // tabText
            'black', // selectedTabText
            'white', // mainBackground
            '#fafafa', // headerBackground
            '#fafafa', // footerBackground
            '#fafafa', // sidePaneBackground
            'black', // primaryText
            '#838383', // secondaryText
            '#e7e7e7', // breadcrumbBackground
            '#666', // sliderBackground
            'black', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            '#c7c7c7', // paneSeparators
            '#c7c7c7', // settingsSeparators
            '#c7c7c7', // contextMenuSeparators
            '#abaeaf', // scrollBars
            '#e7e7e7', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fafafa', // dialogBackground
            '#fff', // primaryButtonText
            '#e1e1e1', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(true);

        return new Theme('Catppuccin Mojave', this.creator, new ThemeCoreColors('#9d7fc5', '#50486f', '#c499f2'), darkColors, lightColors, options);

    }

    private createCatppuccinTheme(): Theme {
        const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            'white', // windowButtonIcon
            'rgba(255, 255, 255, 0.05)', // hoveredItemBackground
            'rgba(255, 255, 255, 0.1)', // selectedItemBackground
            '#818181', // tabText
            'white', // selectedTabText
            '#1e1e28', // mainBackground
            '#1b1923', // headerBackground
            '#1b1923', // footerBackground
            '#1b1923', // sidePaneBackground
            'white', // primaryText
            '#818181', // secondaryText
            '#373737', // breadcrumbBackground
            '#999', // sliderBackground
            'white', // sliderThumbBackground
            '#5e5e5e', // albumCoverLogo
            '#272727', // albumCoverBackground
            '#1b1b1b', // paneSeparators
            '#1b1b1b', // settingsSeparators
            '#1b1b1b', // contextMenuSeparators
            '#7a7a79', // scrollBars
            '#1e1e28', // searchBox
            '#fff', // searchBoxText
            '#fff', // searchBoxIcon
            '#1b1923', // dialogBackground
            '#fff', // primaryButtonText
            '#595959', // secondaryButtonBackground
            '#fff', // secondaryButtonText
            '#fff' // tooltipText
        );

        const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
            'black', // windowButtonIcon
            'rgba(0, 0, 0, 0.05)', // hoveredItemBackground
            'rgba(0, 0, 0, 0.1)', // selectedItemBackground
            '#838383', // tabText
            'black', // selectedTabText
            'white', // mainBackground
            '#fafafa', // headerBackground
            '#fafafa', // footerBackground
            '#fafafa', // sidePaneBackground
            'black', // primaryText
            '#838383', // secondaryText
            '#e7e7e7', // breadcrumbBackground
            '#666', // sliderBackground
            'black', // sliderThumbBackground
            '#838383', // albumCoverLogo
            '#cecece', // albumCoverBackground
            '#c7c7c7', // paneSeparators
            '#c7c7c7', // settingsSeparators
            '#c7c7c7', // contextMenuSeparators
            '#abaeaf', // scrollBars
            '#e7e7e7', // searchBox
            '#000', // searchBoxText
            '#000', // searchBoxIcon
            '#fafafa', // dialogBackground
            '#fff', // primaryButtonText
            '#e1e1e1', // secondaryButtonBackground
            '#000', // secondaryButtonText
            '#fff' // tooltipText
        );

        const options: ThemeOptions = new ThemeOptions(true);

        return new Theme('Catppuccin', this.creator, new ThemeCoreColors('#e38c8f', '#b1e3ad', '#f2cecf'), darkColors, lightColors, options);
    }

    
}


